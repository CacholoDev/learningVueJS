<script setup>
import { useNotifyStore } from '../stores/notify';
import Notificacion from './Notificacion.vue';

const notifyStore = useNotifyStore();
</script>

<template>
	<div v-if="notifyStore.isOpen" class="p-4 bg-white rounded shadow max-w-xl mx-auto">
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold">Notificaciones</h2>
			<button class="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700" @click="notifyStore.markAllAsRead">
				Marcar todas como leidas
			</button>
		</div>
		<ul class="space-y-3">
			<Notificacion v-for="notificacion in notifyStore.notifications" :key="notificacion.id" :notification="notificacion" />
		</ul>
	</div>
</template>
