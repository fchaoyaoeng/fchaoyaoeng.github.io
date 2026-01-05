<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg">📊</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">系統儀表板</h1>
          <p class="text-white/70 text-sm">即時監控系統狀態和各項統計</p>
        </div>
      </div>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
        刷新數據
      </button>
    </div>

    <!-- 訂閱管理統計 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        📋 訂閱管理
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div 
          v-for="stat in subscriptionStats" 
          :key="stat.label"
          class="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
        >
          <div class="text-2xl font-bold mb-1" :class="stat.color">{{ stat.value }}</div>
          <div class="text-white/70 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- 食品管理統計 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        🍎 食品管理
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div 
          v-for="stat in foodStats" 
          :key="stat.label"
          class="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center"
        >
          <div class="text-2xl font-bold mb-1" :class="stat.color">{{ stat.value }}</div>
          <div class="text-white/70 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- 提醒區域 -->
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
        <h3 class="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
          ⚠️ 訂閱到期提醒
        </h3>
        <div class="space-y-2">
          <div class="text-white/80 text-sm">即將到期的訂閱服務需要續費</div>
        </div>
      </div>

      <div class="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
        <h3 class="text-red-300 font-semibold mb-3 flex items-center gap-2">
          🍎 食品到期提醒
        </h3>
        <div class="space-y-2">
          <div class="text-white/80 text-sm">部分食品即將過期，請及時處理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      subscriptionStats: [
        { label: '總訂閱數', value: '24', color: 'text-blue-300' },
        { label: '3天內到期', value: '0', color: 'text-red-300' },
        { label: '7天內到期', value: '1', color: 'text-yellow-300' },
        { label: '已過期', value: '0', color: 'text-gray-300' }
      ],
      foodStats: [
        { label: '總食品數', value: '13', color: 'text-green-300' },
        { label: '3天內到期', value: '0', color: 'text-red-300' },
        { label: '7天內到期', value: '0', color: 'text-yellow-300' },
        { label: '30天內到期', value: '2', color: 'text-orange-300' },
        { label: '已過期', value: '0', color: 'text-gray-300' }
      ]
    }
  }
}
</script>