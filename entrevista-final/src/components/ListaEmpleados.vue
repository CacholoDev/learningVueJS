<script setup>
import { useEmpleadosStore } from '../stores/empleadosStore';
import EmpleadoCard from './EmpleadoCard.vue';
const store = useEmpleadosStore();

</script>

<template>
    <input v-model="store.searchQuery" placeholder="Filtrar por nombre" class="mb-4 p-2 border rounded w-full" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EmpleadoCard v-for="empleado in store.empleadosFiltrados" :key="empleado.id" v-bind="empleado" @despedir="store.despedirEmpleado" />
    </div>
</template>