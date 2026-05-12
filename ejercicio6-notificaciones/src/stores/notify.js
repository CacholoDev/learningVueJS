import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
export const useNotifyStore = defineStore('notify', () => {
    const isOpen = ref(false);
    const notifications = ref([
        { id: 1, titulo: 'Nuevo mensaje', mensaje: 'Tienes un mensaje de Ana', leida: false },
        { id: 2, titulo: 'Oferta', mensaje: 'Descuento del 20% hoy', leida: false },
        { id: 3, titulo: 'Recordatorio', mensaje: 'Reunión a las 5pm', leida: false },
        { id: 4, titulo: 'Actualización', mensaje: 'Nueva versión disponible', leida: true },
    ]);
    function markAsRead(id) {
        const notification = notifications.value.find(n => n.id === id);
        if (notification) {
            notification.leida = true;
        }
    }
    function markAllAsRead() {
        notifications.value.forEach(n => n.leida = true);
    }

    const unreadCount = computed(() => notifications.value.filter(n => !n.leida).length);

    function togglePanel() {
        isOpen.value = !isOpen.value;
    }

    return { isOpen, notifications, markAsRead, markAllAsRead, unreadCount, togglePanel };

}); 