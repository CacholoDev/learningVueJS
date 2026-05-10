<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()

const product = ref([
    {
        name: 'Camiseta',
        price: 19.99,
    },
    {
        name: 'Pantalones',
        price: 29.99,
    },
    {
        name: 'Zapatos',
        price: 49.99,
    },
]);

function handleAddToCart(product) {
    cartStore.addToCart(product);
}
</script>

<template>
    <div class="app-container p-4">
        <h1 class="text-2xl font-bold mb-4 animate-pulse">Tienda</h1>
        <ProductCard v-for="p in product" :key="p.name" :product="p" @add-to-cart="handleAddToCart" />
    </div>
</template>