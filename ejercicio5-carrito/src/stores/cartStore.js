import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    function addToCart(product) {
        if(product.stock <= 0) return;
        items.value.push(product)
    };
    function addCantidad(product) {
        const item = items.value.find(i => i.id === product.id)
        if(item) {
            item.cantidad++
        }
    }
    function reduceCantidad(product) {
        const item = items.value.find(i => i.id === product.id)
        if(item) {
            item.cantidad--
            if(item.cantidad <= 0) {
                items.value = items.value.filter(i => i.id !== product.id)
            }
        }
    }
    function calculateTotal() {
        return items.value.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)
    }
    return {
        items,
        addToCart,
        addCantidad,
        reduceCantidad
    }
})