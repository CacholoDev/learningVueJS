<script setup>
import { onMounted } from "vue";
import UsuarioCard from "./UsuarioCard.vue";
import { useUsuariosStore } from "../stores/usuariosStores.js";

const store = useUsuariosStore();

onMounted(() => {
  store.fetchUsuarios();
});
</script>
<template>
  <div>
    <h2>Lista de Usuarios</h2>

    <UsuarioCard 
      v-for="usuario in store.usuarios"
      :key="usuario.id"
      v-bind="usuario"
    />
  </div>
</template>
