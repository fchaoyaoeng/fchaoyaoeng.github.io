<template>
  <aside class="fixed left-0 top-0 h-full w-48 bg-white/10 backdrop-blur-md border-r border-white/20">
    <div class="p-6">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">鋒</span>
        </div>
        <span class="text-white font-medium">鋒兒AI系統</span>
      </div>
      
      <nav class="space-y-2">
        <router-link 
          v-for="item in menuItems" 
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/20': $route.path === item.path }"
        >
          <span class="text-lg">{{ item.icon }}</span>
          <span class="text-sm">{{ item.label }}</span>
        </router-link>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { name: 'home', path: '/', icon: '🏠', label: '首頁' },
        { name: 'dashboard', path: '/dashboard', icon: '📊', label: '儀表板' },
        { name: 'images', path: '/images', icon: '🖼️', label: '圖片庫' },
        { name: 'videos', path: '/videos', icon: '🎬', label: '影片庫' },
        { name: 'subscriptions', path: '/subscriptions', icon: '📋', label: '訂閱管理' },
        { name: 'food', path: '/food', icon: '🍎', label: '食品管理' }
      ]
    }
  }
}
</script>