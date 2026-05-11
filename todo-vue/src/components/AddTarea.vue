<script setup>
import {useTodoListStore} from '../stores/todoListStore';
import {ref} from 'vue';

const newTarea = ref('');
const todoListStore = useTodoListStore();
function handleAddTarea() {
    if (newTarea.value.trim() !== '') {
        todoListStore.addTarea(newTarea.value);
        newTarea.value = '';
    }
}
</script>

<template>
  <div class="p-4 border">
    <input v-model="newTarea" placeholder="Add a new task..." />
    <button @click="handleAddTarea" class="hover:bg-purple-400 bg-amber-500 text-white p-2 rounded">Add Task</button>
  </div>
</template>