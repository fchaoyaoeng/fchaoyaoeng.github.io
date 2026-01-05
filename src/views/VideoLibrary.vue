<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg">🎬</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">鋒兒影片庫</h1>
          <p class="text-white/70 text-sm">共找到精美人生與娛樂影片庫</p>
        </div>
      </div>
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
        新增影片
      </button>
    </div>

    <div class="mb-6">
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="搜尋影片名稱..."
        class="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50"
      >
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div 
        v-for="video in filteredVideos" 
        :key="video.id"
        class="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
      >
        <div class="aspect-video bg-gray-800 relative flex items-center justify-center">
          <div class="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {{ video.format }}
          </div>
          <div class="text-white/60 text-4xl">▶️</div>
          <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {{ video.duration }}
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-white font-semibold mb-2">{{ video.title }}</h3>
          <p class="text-white/60 text-sm mb-2">{{ video.description }}</p>
          <div class="flex justify-between text-white/50 text-xs">
            <span>大小: {{ video.size }}</span>
            <span>時長: {{ video.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoLibrary',
  data() {
    return {
      searchQuery: '',
      videos: [
        {
          id: 1,
          title: '鋒兒的傳奇人生',
          description: '鋒兒人生經歷分享',
          size: '2.01 MB',
          duration: '00:45',
          format: 'MP4'
        },
        {
          id: 2,
          title: '鋒兒雜牌Show 🔥',
          description: '鋒兒娛樂分享節目',
          size: '4.21 MB', 
          duration: '01:23',
          format: 'MP4'
        }
      ]
    }
  },
  computed: {
    filteredVideos() {
      if (!this.searchQuery) return this.videos
      return this.videos.filter(video => 
        video.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>