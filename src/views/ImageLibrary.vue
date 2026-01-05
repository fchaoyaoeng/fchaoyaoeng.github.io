<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg">🖼️</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">鋒兒圖片庫</h1>
          <p class="text-white/70 text-sm">共找到精美圖片 AI 創作 ({{ images.length }} 張圖片)</p>
        </div>
      </div>
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
        新增圖片
      </button>
    </div>

    <div class="flex gap-4 mb-6">
      <div class="flex-1">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜尋圖片名稱或標籤..."
          class="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50"
        >
      </div>
      <select class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white">
        <option>所有類型</option>
        <option>JPG</option>
        <option>PNG</option>
        <option>GIF</option>
      </select>
      <select class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white">
        <option>按名稱排序</option>
        <option>按大小排序</option>
        <option>按日期排序</option>
      </select>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div 
        v-for="image in filteredImages" 
        :key="image.id"
        class="bg-white/10 backdrop-blur-md rounded-lg p-3 hover:bg-white/20 transition-colors"
      >
        <div class="aspect-square bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
          <span class="text-gray-600">{{ image.type }}</span>
        </div>
        <h3 class="text-white text-sm font-medium truncate">{{ image.name }}</h3>
        <p class="text-white/60 text-xs">{{ image.size }}</p>
        <p class="text-white/60 text-xs">{{ image.dimensions }}</p>
      </div>
    </div>

    <div class="mt-6 text-center">
      <p class="text-white/60 text-sm">
        顯示 {{ filteredImages.length }} 張圖片，總計 {{ totalSize }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLibrary',
  data() {
    return {
      searchQuery: '',
      images: [
        { id: 1, name: '1761405813-e...', type: 'JPG', size: '887 KB', dimensions: '1920x1080' },
        { id: 2, name: '1761405863-3...', type: 'JPG', size: '731 KB', dimensions: '1920x1080' },
        { id: 3, name: '1761405934-7...', type: 'JPG', size: '547 KB', dimensions: '1920x1080' },
        { id: 4, name: '20240917_183...', type: 'PNG', size: '7.46 MB', dimensions: '3840x2160' },
        { id: 5, name: '202509_A4_2...', type: 'PNG', size: '9.78 MB', dimensions: '3840x2160' },
        { id: 6, name: '20251026_214...', type: 'JPG', size: '6.94 KB', dimensions: '1920x1080' }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (!this.searchQuery) return this.images
      return this.images.filter(image => 
        image.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    totalSize() {
      return '625.95 MB'
    }
  }
}
</script>