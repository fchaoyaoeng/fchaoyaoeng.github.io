<template>
  <div class="text-center py-20">
    <div class="mb-8">
      <div class="w-20 h-20 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <span class="text-white text-3xl font-bold">鋒</span>
      </div>
      <h1 class="text-4xl font-bold text-white mb-4">鋒兒AI資訊系統</h1>
      <p class="text-white/80 text-lg">智能管理您的影片和圖片收藏，支援智能分類和快速搜尋</p>
    </div>

    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
      <p class="text-white/90 mb-6">鋒兒適習公開資訊 © 版權所有 2025 - 2125</p>
      
      <div class="grid md:grid-cols-2 gap-8 text-left">
        <div>
          <h3 class="text-orange-300 font-semibold mb-3 flex items-center gap-2">
            🔧 前端技術
          </h3>
          <ul class="text-white/80 space-y-1 text-sm">
            <li>• Vue.js 3 (Composition API)</li>
            <li>• Vue Router 4</li>
            <li>• Pinia 狀態管理</li>
            <li>• Tailwind CSS 樣式</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-pink-300 font-semibold mb-3 flex items-center gap-2">
            💎 後端技術
          </h3>
          <ul class="text-white/80 space-y-1 text-sm">
            <li>• Vite 建構工具</li>
            <li>• GitHub Pages 部署</li>
            <li>• 響應式設計</li>
            <li>• 現代化 UI/UX</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold text-yellow-300 mb-4">🌟 系統功能選單</h2>
      <div class="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <router-link 
          v-for="feature in features" 
          :key="feature.name"
          :to="feature.path"
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105"
        >
          <div class="text-3xl mb-3">{{ feature.icon }}</div>
          <h3 class="text-white font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-white/70 text-sm">{{ feature.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      features: [
        {
          name: 'images',
          path: '/images',
          icon: '🖼️',
          title: '圖片庫',
          description: '管理和瀏覽您的圖片收藏'
        },
        {
          name: 'videos', 
          path: '/videos',
          icon: '🎬',
          title: '影片庫',
          description: '組織和播放您的影片內容'
        },
        {
          name: 'dashboard',
          path: '/dashboard', 
          icon: '📊',
          title: '系統儀表板',
          description: '查看系統統計和管理概況'
        },
        {
          name: 'food',
          path: '/food',
          icon: '🍎', 
          title: '食品管理',
          description: '管理食品庫存和到期提醒'
        },
        {
          name: 'subscriptions',
          path: '/subscriptions',
          icon: '📋',
          title: '訂閱管理', 
          description: '管理各種訂閱服務和帳單'
        }
      ]
    }
  }
}
</script>