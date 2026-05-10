<script setup>
import {useCartStore} from '../stores/cart';
import { computed } from 'vue';
const cartStore = useCartStore();
</script>

<template>
    <div class="cart-container border p-4 rounded shadow mt-4">
        <h2 class="text-xl font-bold mb-4">Carrito de Compras</h2>
        <div v-if="cartStore.items.length === 0" class="text-gray-500">El carrito está vacío.</div>
        <ul v-else>
            <li v-for="(item, index) in cartStore.items" :key="index" class="mb-2">
                {{ item.name }} - ${{ item.price }}
            </li>
        </ul>
        <p class="text-lg font-bold mt-4">Total: ${{ cartStore.total }}</p>
    </div>
</template>