import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useManageUsersStore = defineStore("manageUsers", () => {
  const users = ref([
    { id: 1, nombre: "Ana García", email: "ana@mail.com", activo: true },
    { id: 2, nombre: "Carlos López", email: "carlos@mail.com", activo: false },
    { id: 3, nombre: "María Martínez", email: "maria@mail.com", activo: true },
    { id: 4, nombre: "Laura Sánchez", email: "laura@mail.com", activo: true },
    { id: 5, nombre: "Manolo Fernández", email: "manolo@mail.com", activo: false },
  ]);

  const contador = computed(() => users.value.filter((u) => u.activo).length);

  function toggleActivo(id) {
    const user = users.value.find((u) => u.id === id);
    if (user) {
      user.activo = !user.activo;
    }
  }

  function setAllActive() {
    users.value.forEach((u) => (u.activo = true));
  }

  function setAllInactive() {
    users.value.forEach((u) => (u.activo = false));
  }

  return {
    users,
    toggleActivo,
    setAllActive,
    setAllInactive,
    contador,
  };
});
