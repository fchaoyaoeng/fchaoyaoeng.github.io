<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
          <span class="text-white text-lg">🍎</span>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">食品管理系統</h1>
          <p class="text-white/70 text-sm">管理您的食品庫存及到期提醒</p>
        </div>
      </div>
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
        新增食品
      </button>
    </div>

    <div class="flex gap-4 mb-6">
      <div class="flex-1">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜尋食品名稱或商品..."
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

    <div class="grid md:grid-cols-2 gap-6">
      <div 
        v-for="food in filteredFoods" 
        :key="food.id"
        class="bg-white/10 backdrop-blur-md rounded-lg p-6"
      >
        <div class="flex items-start gap-4">
          <div class="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
            <span class="text-2xl">{{ food.emoji }}</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-white font-semibold">{{ food.name }}</h3>
              <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">{{ food.status }}</span>
            </div>
            <div class="space-y-1 text-sm text-white/70">
              <p>數量: {{ food.quantity }}</p>
              <p>價格: {{ food.price }}</p>
              <p>過期: {{ food.expiry }}</p>
              <p>到期日期: {{ food.expiryDate }}</p>
              <p>剩餘天數: {{ food.daysLeft }}</p>
            </div>
          </div>
        </div>
        <div class="flex gap-2 mt-4">
          <button class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
            編輯
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            🗑️
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodManagement',
  data() {
    return {
      searchQuery: '',
      foods: [
        {
          id: 1,
          name: '【張君雅】五香海苔休閒丸子',
          emoji: '🍘',
          quantity: '3',
          price: 'NT$ 0',
          expiry: '未設定',
          expiryDate: '2026-01-06',
          daysLeft: '15 天',
          status: '良好'
        },
        {
          id: 2,
          name: '【張君雅】日式串燒休閒丸子',
          emoji: '🍡',
          quantity: '5',
          price: 'NT$ 0', 
          expiry: '未設定',
          expiryDate: '2026-01-07',
          daysLeft: '16 天',
          status: '良好'
        }
      ]
    }
  },
  computed: {
    filteredFoods() {
      if (!this.searchQuery) return this.foods
      return this.foods.filter(food => 
        food.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>