// YouTube Video Data Service
// Static video data from the Cornea Web Academy YouTube channel
// Channel: https://www.youtube.com/@CorneaWebAcademy

const CHANNEL_VIDEOS = [
  // DALK
  { youtubeId: 'oG-lbiLoj5E', title: 'DALK in Scarred KC', category: 'dalk' },
  { youtubeId: 'xQcs1OOLMlY', title: 'DALK for Granular Dystrophy', category: 'dalk' },
  { youtubeId: 'IGx2z13qEp8', title: 'DALK without pneumatic dissection in HSV', category: 'dalk' },
  { youtubeId: 'J8mscVyfod4', title: 'DALK in HSV Irregular Peripheral Thickness', category: 'dalk' },
  // DMEK
  { youtubeId: '8nugvAkJdlg', title: 'Sutureless DMEK', category: 'dmek' },
  { youtubeId: 'fXPLH7iAbDs', title: 'Pre loaded DMEK preparation and implantation', category: 'dmek' },
  { youtubeId: 'EHLVlEkZpag', title: 'Pre-Loaded DMEK', category: 'dmek' },
  // SALK
  { youtubeId: 'iM67SL7SxNY', title: 'SALK', category: 'general' },
  // UT-DSAEK
  { youtubeId: 'tSIBbAduCO8', title: 'UT DSAEK Single Pass', category: 'ut-dsaek' },
  { youtubeId: 'C4qYyoHpkkQ', title: 'UT DSAEK', category: 'ut-dsaek' },
  // DSAEK
  { youtubeId: '5yAHblu0W1U', title: 'DSAEK IOL Exchange in phakic eye', category: 'dsaek' },
  { youtubeId: 'qcQXSeYm79I', title: 'Phaco DSAEK in cloudy cornea', category: 'dsaek' },
  { youtubeId: 'tV241Hp0w8E', title: 'Post DSAEK Phaco', category: 'dsaek' },
  { youtubeId: 'CDcaBLi-vto', title: 'DSAEK in vitrectomized eyes', category: 'dsaek' },
  { youtubeId: 'KtHEWc84uMo', title: 'DSAEK in Buphthalmos', category: 'dsaek' },
  { youtubeId: 'IFRN6gIs3Bw', title: 'DSAEK in CHED', category: 'dsaek' },
  { youtubeId: 'yeu3MFvSI8k', title: 'DSAEK Beyond the Horizon', category: 'dsaek' },
  { youtubeId: '6IQhLEG05gU', title: 'DSAEK in Aphakia with prolene stitch', category: 'dsaek' },
  { youtubeId: 'EcYT2Tb0zL0', title: 'I Glide Preloaded DSAEK', category: 'dsaek' },
  { youtubeId: '3FEXXcJI8Ac', title: 'Insertion techniques DSAEK', category: 'dsaek' },
  { youtubeId: 'lLsiClrxb5I', title: 'DSAEK in failed LASIK', category: 'dsaek' },
  { youtubeId: 'mZ1x7p-mrPw', title: 'DSAEK with sutured PCIOL', category: 'dsaek' },
]

class YouTubeService {
  getChannelVideos() {
    return CHANNEL_VIDEOS.map((video, index) => ({
      id: index + 1,
      ...video,
      description: '',
      thumbnail: `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`,
      surgeon: 'Prof. Massimo Busin',
    }))
  }
}

export default new YouTubeService()
