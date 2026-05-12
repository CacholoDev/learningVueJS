<script setup>
import { useManageUsersStore } from './stores/managinUsersStore';
import UserList from './components/UserList.vue';
import ContadorActivos from './components/ContadorActivos.vue';
import AllActiveInactive from './components/AllActiveInactive.vue';
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold border-b-2 border-amber-500 bg-amber-250 mb-4">Usesr</h1>
    <ContadorActivos />
    <UserList />
    <AllActiveInactive />
  </div>
</template>
