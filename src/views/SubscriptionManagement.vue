<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg">📋</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">訂閱管理系統</h1>
          <p class="text-white/70 text-sm">管理您的各種訂閱服務和帳單資訊</p>
        </div>
      </div>
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
        新增訂閱
      </button>
    </div>

    <div class="flex gap-4 mb-6">
      <div class="flex-1">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜尋訂閱名稱..."
          class="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50"
        >
      </div>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
        🔍 搜尋
      </button>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
        重新載入
      </button>
    </div>

    <div class="space-y-4">
      <div 
        v-for="subscription in filteredSubscriptions" 
        :key="subscription.id"
        class="bg-white/10 backdrop-blur-md rounded-lg p-6"
      >
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-white font-semibold text-lg">{{ subscription.name }}</h3>
              <span 
                class="text-xs px-2 py-1 rounded"
                :class="subscription.status === '即將到期' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'"
              >
                {{ subscription.status }}
              </span>
            </div>
            <div class="grid md:grid-cols-4 gap-4 text-sm text-white/70">
              <div>
                <span class="block text-white/50">網站:</span>
                <a :href="subscription.website" class="text-blue-300 hover:underline" target="_blank">
                  {{ subscription.website }}
                </a>
              </div>
              <div>
                <span class="block text-white/50">價格:</span>
                <span class="text-white">{{ subscription.price }}</span>
              </div>
              <div>
                <span class="block text-white/50">下次付款:</span>
                <span class="text-white">{{ subscription.nextPayment }}</span>
              </div>
              <div>
                <span class="block text-white/50">剩餘天數:</span>
                <span class="text-white">{{ subscription.daysLeft }}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-2 ml-4">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              編輯
            </button>
            <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionManagement',
  data() {
    return {
      searchQuery: '',
      subscriptions: [
        {
          id: 1,
          name: '天成/實信訊/心臟內科',
          website: 'https://www.tcmg.com.tw/index.php/main/schedule_time?id=18',
          price: 'NT$ 530',
          nextPayment: '2025-12-26',
          daysLeft: '355 天',
          status: '即將到期'
        },
        {
          id: 2,
          name: 'kiro pro',
          website: 'https://app.kiro.dev/account/',
          price: 'NT$ 640',
          nextPayment: '2026-01-01',
          daysLeft: '10 天',
          status: '正常'
        }
      ]
    }
  },
  computed: {
    filteredSubscriptions() {
      if (!this.searchQuery) return this.subscriptions
      return this.subscriptions.filter(sub => 
        sub.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>