<script setup>
import { useManageUsersStore } from '../stores/managinUsersStore';
const manageUsersStore = useManageUsersStore();

</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Active Users: {{ manageUsersStore.contador }}</h2>
  </div>
</template>