<script setup>
import { ref } from "vue";
import { useUsuariosStore } from "../stores/usuariosStores.js";

const store = useUsuariosStore();

const nombre = ref("");
const apellido = ref("");
const fechaNacimiento = ref("");

async function addUsuario() {
  const nombreTrim = nombre.value.trim();
  const apellidoTrim = apellido.value.trim();
  const fecha = fechaNacimiento.value.trim();

  if (!nombreTrim || !apellidoTrim || !fecha) return;

  try {
    await store.agregarUsuario({
      id: Date.now(),
      nombre: nombreTrim,
      apellido: apellidoTrim,
      fechaNacimiento: fecha,
    });
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    return;
  }

  nombre.value = "";
  apellido.value = "";
  fechaNacimiento.value = "";
}
</script>

<template>
  <div class="p-4 border rounded mb-4">
    <h2 class="text-lg font-semibold mb-3">Agregar usuario</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <input v-model="nombre" class="border p-2 rounded" placeholder="Nombre" />
      <input v-model="apellido" class="border p-2 rounded" placeholder="Apellido" />
      <input v-model="fechaNacimiento" class="border p-2 rounded" placeholder="YYYY-MM-DD" />
    </div>
    <button @click="addUsuario" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Agregar
    </button>
  </div>
</template>
