import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  
  const total = computed(() => {
    return items.value.reduce((acc, p) => acc + p.price, 0).toFixed(2)
  })

  function addToCart(product) {
    items.value.push(product)
  }

  return { items, total, addToCart }
})