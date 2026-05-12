<script setup>
import { useManageUsersStore } from '../stores/managinUsersStore';
const manageUsersStore = useManageUsersStore();
const badgeColor = (activo) => {
  return activo ? 'bg-green-500' : 'bg-red-500';
};
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">User List</h1>
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border p-2">ID</th>
        <th class="border p-2">Name</th>
        <th class="border p-2">Email</th>
        <th class="border p-2">Active</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in manageUsersStore.users" :key="user.id">
        <td class="border p-2">{{ user.id }}</td>
        <td class="border p-2">{{ user.nombre }}</td>
        <td class="border p-2">{{ user.email }}</td>
        <td class="border p-2">
          <span :class="badgeColor(user.activo)">
            {{ user.activo ? 'Yes' : 'No' }}
          </span>
        </td>
        <slot name="actions">
          <button @click="manageUsersStore.toggleActivo(user.id)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Toggle Active
          </button>
        </slot>
      </tr>
    </tbody>
    </table>
</template>