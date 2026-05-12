<script setup>
import {ref} from 'vue';
import {useCartStore} from '../stores/cartStore';

const cartStore = useCartStore();
const products = ref([
  { id: 1, nombre: 'Camiseta', precio: 19.99, stock: 5 },
  { id: 2, nombre: 'Pantalón', precio: 39.99, stock: 3 },
  { id: 3, nombre: 'Zapatillas', precio: 59.99, stock: 2 },
  { id: 4, nombre: 'Gorra', precio: 14.99, stock: 8 },
]);
</script>

<template>
    <div class="p-4">
        <h1 class="text-3xl font-bold border-b-2 border-amber-500 bg-amber-250 mb-4">Productos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="border p-4 rounded">
            <h2 class="text-xl font-semibold">{{ product.nombre }}</h2>
            <p>Precio: ${{ product.precio }}</p>
            <p>Stock: {{ product.stock }}</p>
            <button @click="cartStore.addToCart(product)" class="hover:bg-blue-400 bg-blue-500 text-white p-2 rounded mt-2">Agregar al Carrito</button>
        </div>
        </div>
    </div>
</template>