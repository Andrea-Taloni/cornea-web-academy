# YouTube Integration Setup Guide

## Overview
The Recordings page is now configured to dynamically sync with the Cornea Web Academy YouTube channel. Videos are automatically fetched and displayed with caching for optimal performance.

## Setup Instructions

### 1. Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **YouTube Data API v3**:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

### 2. Find the Channel ID

Option A: Using YouTube Studio
1. Sign in to YouTube with the channel account
2. Go to YouTube Studio
3. Click Settings > Channel > Advanced settings
4. Copy the Channel ID (starts with UC...)

Option B: Using the channel URL
1. Visit the channel: https://www.youtube.com/@CorneaWebAcademy
2. View page source (Ctrl+U or Cmd+U)
3. Search for "channelId" or "externalId"
4. Copy the value (starts with UC...)

Option C: Using the provided utility (after setting API key)
1. Add your API key to .env file
2. Open browser console on the website
3. Run: `getChannelIdFromHandle()` 
4. Copy the returned Channel ID

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your values:
   ```
   VITE_YOUTUBE_API_KEY=your_api_key_here
   VITE_YOUTUBE_CHANNEL_ID=UC_your_channel_id_here
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

## Features

### Automatic Synchronization
- Videos are fetched automatically from the YouTube channel
- Updates every hour (cached for performance)
- Fallback to sample data if API is unavailable

### Video Categorization
Videos are automatically categorized based on their title and description:
- DALK
- DMEK
- DSAEK
- UT-DSAEK
- Mushroom PK
- SALK
- Educational

### Surgeon Detection
The system automatically detects and displays the surgeon's name from video titles and descriptions.

### Search and Filtering
- Search by title, description, or surgeon
- Filter by surgery category
- Sort by title, surgeon, or category

## Troubleshooting

### API Key Issues
- Ensure the API key has YouTube Data API v3 enabled
- Check for any API quota limits (default is 10,000 units/day)
- Verify the key is correctly added to .env file

### Channel ID Issues
- Make sure you're using the Channel ID (starts with UC), not the channel handle (@name)
- Verify the channel is public and has uploaded videos

### No Videos Showing
1. Check browser console for errors
2. Verify API key and Channel ID are correct
3. Clear cache: Open browser console and run `youtubeService.clearCache()`
4. Check if fallback data is displayed (indicates API issue)

## API Quota Management

The YouTube Data API has daily quota limits:
- Default quota: 10,000 units per day
- Each API call uses different units (search: 100, list: 1-3)
- Our implementation uses caching to minimize API calls

To monitor usage:
1. Go to Google Cloud Console
2. Navigate to APIs & Services > YouTube Data API v3
3. Check the Metrics tab

## Security Notes

- Never commit the .env file to version control
- The API key is restricted to YouTube Data API only
- Consider adding HTTP referrer restrictions in Google Cloud Console
- For production, use environment variables from your hosting platform

## Manual Cache Management

To manually clear the cache (useful for testing):
1. Open browser developer console
2. Run: `localStorage.removeItem('youtube_videos_cache')`
3. Refresh the page

Or use the built-in method:
```javascript
youtubeService.clearCache()
```

## Support

For issues with:
- YouTube API: Check [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- Channel setup: Contact the Cornea Web Academy team
- Technical issues: Check the browser console for error messages