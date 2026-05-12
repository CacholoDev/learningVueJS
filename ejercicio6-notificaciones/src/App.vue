<script setup>
import BellNotify from './components/BellNotify.vue';
import NotificationList from './components/NotificationList.vue';
</script>

<template>
  <div class="min-h-screen bg-linear-to-r from-blue-100 to-purple-200">
    <div class="flex justify-end p-4">
      <BellNotify />
    </div>
    <NotificationList />
  </div>
</template>
