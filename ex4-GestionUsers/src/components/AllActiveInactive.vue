<script setup>
import { useManageUsersStore } from '../stores/managinUsersStore';
const manageUsersStore = useManageUsersStore();
</script>
<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Active/Inactive All Users buttons</h2>
    <button @click="manageUsersStore.setAllActive()" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mr-2">Set All Active</button>
    <button @click="manageUsersStore.setAllInactive()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Set All Inactive</button>     
  </div>
</template>