<script setup>
import {useCartStore} from '../stores/cartStore';
const cartStore = useCartStore();

</script>
<template>
  <div class="app-container p-4 bg-linear-to-r from-blue-200 to-purple-300 min-h-screen">
    <h1 class="text-3xl font-bold border-b-2 border-amber-500 bg-amber-250 mb-4">Carrito de Compras</h1>
    <div v-if="cartStore.items.length === 0" class="text-center text-gray-500">
      <p class="text-lg">Tu carrito está vacío.</p>
    </div>
    <div v-else class="space-y-4">
      <div v-for="item in cartStore.items" :key="item.id" class="flex items-center justify-between bg-white p-4 rounded shadow">
        <div>
          <h2 class="text-lg font-semibold">{{ item.nombre }}</h2>
          <p class="text-gray-600">Precio: ${{ item.precio }}</p>
        </div>
        <button @click="cartStore.addCantidad(item)" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Añadir</button>
        <button @click="cartStore.reduceCantidad(item)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
      </div>

      <div class="text-right font-bold text-xl">
        Total: ${{ cartStore.total }}
      </div>
    </div>
  </div>
</template>