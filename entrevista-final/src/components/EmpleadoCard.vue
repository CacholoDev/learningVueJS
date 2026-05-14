<script setup>
const props = defineProps({
    nombre: String,
    departamento: String,
    salario: Number,
    id: Number
});

const emit = defineEmits(["despedir"]);

function handleDespedir() {
    emit("despedir", props.id);
}           
</script>

<template>
    <div class="border p-4">
        <h2 class="text-xl font-bold mb-2">{{props.nombre}}</h2>
        <p class="text-gray-600">Departamento: {{props.departamento}}</p>
        <p class="text-gray-600">Salario: ${{props.salario}}</p>
        <button @click="handleDespedir" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Despedir</button>
    </div>
</template>