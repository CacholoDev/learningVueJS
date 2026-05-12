<script setup>
import { useNotifyStore } from '../stores/notify';
const props = defineProps({
    notification: {
        type: Object,
        required: true,
    },
});
const notifyStore = useNotifyStore();

function handleClick() {
    notifyStore.markAsRead(props.notification.id);
}
</script>
<template>
    <li class="border p-4 rounded cursor-pointer" @click="handleClick">
        <div class="flex items-start justify-between">
            <div>
                <h3 class="text-lg font-semibold">{{ props.notification.titulo }}</h3>
                <p class="text-sm text-gray-600">{{ props.notification.mensaje }}</p>
            </div>
            <span class="text-xs px-2 py-1 rounded" :class="props.notification.leida ? 'bg-gray-300 text-gray-700' : 'bg-blue-100 text-blue-700'">
                {{ props.notification.leida ? 'Leida' : 'Nueva' }}
            </span>
        </div>
    </li>
</template>