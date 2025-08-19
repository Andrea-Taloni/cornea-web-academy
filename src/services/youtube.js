// YouTube API Service
// This service fetches videos from the Cornea Web Academy YouTube channel

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || ''
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_YOUR_CHANNEL_ID' // Replace with actual Cornea Web Academy channel ID
const MAX_RESULTS = 50 // Maximum number of videos to fetch per request

// Cache configuration
const CACHE_KEY = 'youtube_videos_cache'
const CACHE_DURATION = 1000 * 60 * 15 // 15 minutes in milliseconds

class YouTubeService {
  constructor() {
    this.apiKey = YOUTUBE_API_KEY
    this.channelId = CHANNEL_ID
    this.baseUrl = 'https://www.googleapis.com/youtube/v3'
  }

  // Get cached data if available and not expired
  getCachedData() {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (!cached) return null

      const { data, timestamp } = JSON.parse(cached)
      const now = Date.now()

      if (now - timestamp < CACHE_DURATION) {
        return data
      }

      // Cache expired, remove it
      localStorage.removeItem(CACHE_KEY)
      return null
    } catch (error) {
      console.error('Error reading cache:', error)
      return null
    }
  }

  // Save data to cache
  setCachedData(data) {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
    } catch (error) {
      console.error('Error setting cache:', error)
    }
  }

  // Fetch channel details to get uploads playlist ID
  async getChannelDetails() {
    try {
      const response = await fetch(
        `${this.baseUrl}/channels?part=contentDetails&id=${this.channelId}&key=${this.apiKey}`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.items || data.items.length === 0) {
        throw new Error('Channel not found')
      }

      return data.items[0].contentDetails.relatedPlaylists.uploads
    } catch (error) {
      console.error('Error fetching channel details:', error)
      throw error
    }
  }

  // Fetch videos from uploads playlist
  async fetchPlaylistVideos(playlistId, pageToken = '') {
    try {
      let url = `${this.baseUrl}/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${playlistId}&key=${this.apiKey}`
      
      if (pageToken) {
        url += `&pageToken=${pageToken}`
      }

      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching playlist videos:', error)
      throw error
    }
  }

  // Get video statistics (views, likes, etc.)
  async getVideoStatistics(videoIds) {
    try {
      const ids = videoIds.join(',')
      const response = await fetch(
        `${this.baseUrl}/videos?part=statistics,contentDetails&id=${ids}&key=${this.apiKey}`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const stats = {}
      
      data.items.forEach(item => {
        stats[item.id] = {
          viewCount: parseInt(item.statistics.viewCount || 0),
          likeCount: parseInt(item.statistics.likeCount || 0),
          duration: item.contentDetails.duration
        }
      })
      
      return stats
    } catch (error) {
      console.error('Error fetching video statistics:', error)
      return {}
    }
  }

  // Parse ISO 8601 duration to human readable format
  parseDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    
    const hours = (match[1] || '').replace('H', '')
    const minutes = (match[2] || '').replace('M', '')
    const seconds = (match[3] || '').replace('S', '')
    
    let result = []
    if (hours) result.push(`${hours}h`)
    if (minutes) result.push(`${minutes}m`)
    if (seconds) result.push(`${seconds}s`)
    
    return result.join(' ') || '0s'
  }

  // Categorize video based on title and description
  categorizeVideo(title, description) {
    const text = `${title} ${description}`.toLowerCase()
    
    if (text.includes('dalk') || text.includes('deep anterior lamellar')) {
      return 'dalk'
    } else if (text.includes('dmek') || text.includes('descemet membrane')) {
      return 'dmek'
    } else if (text.includes('ut-dsaek') || text.includes('ultra-thin') || text.includes('ultrathin')) {
      return 'ut-dsaek'
    } else if (text.includes('dsaek') || text.includes('descemet stripping')) {
      return 'dsaek'
    } else if (text.includes('mushroom') || text.includes('two-piece')) {
      return 'mushroom-pk'
    } else if (text.includes('salk')) {
      return 'salk'
    } else if (text.includes('educational') || text.includes('lecture') || text.includes('tutorial')) {
      return 'educational'
    }
    
    return 'general'
  }

  // Extract surgeon name from title or description
  extractSurgeon(title, description) {
    const surgeons = [
      'Massimo Busin',
      'Angeli Christy Yu',
      'Vincenzo Scorcia',
      'Cristina Bovone',
      'Namrata Sharma',
      'Rajesh Fogla',
      'Niccolò Salgari'
    ]
    
    const text = `${title} ${description}`
    
    for (const surgeon of surgeons) {
      if (text.includes(surgeon)) {
        return `Dr. ${surgeon}`
      }
    }
    
    // Check for Prof. or Dr. mentions
    const profMatch = text.match(/(?:Prof\.|Professor|Dr\.|Doctor)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
    if (profMatch) {
      return profMatch[0]
    }
    
    return 'Cornea Web Academy'
  }

  // Main method to get all videos
  async getChannelVideos() {
    try {
      // Check cache first
      const cachedData = this.getCachedData()
      if (cachedData) {
        console.log('Using cached YouTube data')
        return cachedData
      }

      if (!this.apiKey) {
        throw new Error('YouTube API key not configured. Please add VITE_YOUTUBE_API_KEY to your .env file')
      }

      // Get uploads playlist ID
      const uploadsPlaylistId = await this.getChannelDetails()
      
      // Fetch all videos (handling pagination)
      let allVideos = []
      let nextPageToken = ''
      
      do {
        const playlistData = await this.fetchPlaylistVideos(uploadsPlaylistId, nextPageToken)
        allVideos = allVideos.concat(playlistData.items)
        nextPageToken = playlistData.nextPageToken
      } while (nextPageToken && allVideos.length < 200) // Limit to 200 videos max
      
      // Get video IDs for statistics
      const videoIds = allVideos.map(item => item.snippet.resourceId.videoId)
      
      // Fetch statistics in batches of 50
      let allStats = {}
      for (let i = 0; i < videoIds.length; i += 50) {
        const batch = videoIds.slice(i, i + 50)
        const batchStats = await this.getVideoStatistics(batch)
        allStats = { ...allStats, ...batchStats }
      }
      
      // Process and format videos
      const formattedVideos = allVideos.map((item, index) => {
        const videoId = item.snippet.resourceId.videoId
        const stats = allStats[videoId] || {}
        
        return {
          id: index + 1,
          youtubeId: videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          publishedAt: item.snippet.publishedAt,
          surgeon: this.extractSurgeon(item.snippet.title, item.snippet.description),
          category: this.categorizeVideo(item.snippet.title, item.snippet.description),
          viewCount: stats.viewCount || 0,
          likeCount: stats.likeCount || 0,
          duration: stats.duration ? this.parseDuration(stats.duration) : 'N/A'
        }
      })
      
      // Sort by published date (newest first)
      formattedVideos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      
      // Cache the results
      this.setCachedData(formattedVideos)
      
      return formattedVideos
    } catch (error) {
      console.error('Error fetching YouTube videos:', error)
      
      // Return empty array with error flag
      return {
        videos: [],
        error: error.message
      }
    }
  }

  // Clear cache manually
  clearCache() {
    try {
      localStorage.removeItem(CACHE_KEY)
      console.log('YouTube cache cleared')
    } catch (error) {
      console.error('Error clearing cache:', error)
    }
  }
}

// Export singleton instance
export default new YouTubeService()