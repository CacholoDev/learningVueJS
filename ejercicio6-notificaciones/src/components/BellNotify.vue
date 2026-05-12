<script setup>
import { useNotifyStore } from '../stores/notify';
const notifyStore = useNotifyStore();
</script>
<template>
    <div class="relative">
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" @click="notifyStore.togglePanel">
            <span aria-hidden="true">🔔</span>
            <span class="sr-only">Notificaciones</span>
        </button>
        <span v-if="notifyStore.unreadCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {{ notifyStore.unreadCount }}
        </span>
    </div>
</template>