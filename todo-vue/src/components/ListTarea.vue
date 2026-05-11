<script setup>
import {useTodoListStore} from '../stores/todoListStore';

const todoListStore = useTodoListStore();
</script>

<template>
  <div class="p-4">
    <ul>
      <li v-for="(todo, index) in todoListStore.todos" :key="index">
        {{ todo.text }}
        <button @click="todoListStore.deleteTarea(index)" class="hover:bg-red-400 bg-amber-500 text-white p-2 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>