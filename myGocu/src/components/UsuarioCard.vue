<script setup>
const props = defineProps({
    nombre: String,
    apellido: String,
    fechaNacimiento: String,
});

</script>
<template>
    <div class="border p-4 rounded">
        <h3 class="text-lg font-semibold">{{ props.nombre }} {{ props.apellido }}</h3>
        <p class="text-sm text-gray-600">{{ props.fechaNacimiento }}</p>
    </div>
</template>