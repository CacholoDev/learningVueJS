import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    function addToCart(product) {
        if (product.stock <= 0) return;
        const existing = items.value.find(i => i.id === product.id)
        if (existing) {
            addCantidad(existing)
            return;
        }
        items.value.push({ ...product, cantidad: 1 })
    };
    function addCantidad(product) {
        const item = items.value.find(i => i.id === product.id)
        if (item && item.cantidad < item.stock) {
            item.cantidad += 1
        }
    }
    function reduceCantidad(product) {
        const item = items.value.find(i => i.id === product.id)
        if(item) {
            item.cantidad -= 1
            if (item.cantidad <= 0) {
                items.value = items.value.filter(i => i.id !== product.id)
            }
        }
    }
    const total = computed(() => {
        return items.value
            .reduce((sum, item) => sum + item.precio * item.cantidad, 0)
            .toFixed(2)
    })
    return {
        items,
        addToCart,
        addCantidad,
        reduceCantidad,
        total
    }
})