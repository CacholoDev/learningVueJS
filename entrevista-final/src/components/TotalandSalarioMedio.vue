<script setup>
import { useEmpleadosStore } from '../stores/empleadosStore';
const store = useEmpleadosStore();
</script>

<template>
    <div class="bg-white p-4 rounded shadow mb-4">
        <h2 class="text-xl font-bold mb-3">Resumen</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded">
                <p class="text-sm text-gray-600">Total empleados</p>
                <p class="text-2xl font-bold">{{ store.totalEmpleados() }}</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
                <p class="text-sm text-gray-600">Salario medio</p>
                <p class="text-2xl font-bold">${{ store.salarioPromedio() }}</p>
            </div>
        </div>
    </div>
</template>