<script setup>
import AddTarea from './components/AddTarea.vue';
import ListTarea from './components/ListTarea.vue';
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold border-b-2 border-amber-500 bg-amber-250">Todo List</h1>
    <AddTarea />
    <ListTarea />
  </div>
</template>