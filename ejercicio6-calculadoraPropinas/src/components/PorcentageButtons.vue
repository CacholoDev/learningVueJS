<script setup>
import {usePropinaStore} from '../stores/propinaStore';

const store = usePropinaStore();

</script>
<template>
    <div>
        <h1 class="text-3xl font-bold mb-4">Calculadora de Propinas</h1>
        <div class="mb-4">
            <label for="total" class="block text-lg font-medium mb-2">Total de la cuenta:</label>
            <input v-model.number="store.total" id="total" type="number" class="w-full p-2 border rounded" placeholder="Ingrese el total de la cuenta">
        </div>
        <div class="mb-4">
            <label for="propina" class="block text-lg font-medium mb-2">Porcentaje de propina:</label>
            <input v-model.number="store.porcentaje" id="propina" type="number" class="w-full p-2 border rounded" placeholder="Ingrese el porcentaje de propina">
            <button @click="store.porcentaje = 10" class="bg-blue-500 text-white p-2 rounded m-2">10%</button>
            <button @click="store.porcentaje = 15" class="bg-blue-500 text-white p-2 rounded m-2">15%</button>
            <button @click="store.porcentaje = 20" class="bg-blue-500 text-white p-2 rounded m-2">20%</button>
        </div>
        <div class="mb-4">
            <p class="text-xl font-semibold">Monto de la propina: {{ store.propina }}</p>
            <p class="text-xl font-semibold">Total a pagar: {{ store.totalConPropina }}</p>
        </div>
    </div>
</template>