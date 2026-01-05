<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
    <Sidebar />
    <main class="ml-48 p-6">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>