<script setup>
const props = defineProps({
  title: String,
  year: Number,
});
</script>

<template>
  <div class="border p-4">
    <h2 class="text-xl font-bold mb-2">{{props.title}}</h2>
    <p class="text-gray-600">{{props.year}}</p>
    <div class="mt-4">
      <slot name="actions" />
    </div>
  </div>
</template>