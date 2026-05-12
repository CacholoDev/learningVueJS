import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const usePropinaStore = defineStore("propina", () => {
  const total = ref(0);
  const porcentaje = ref(0);
  const personas = ref(1);
  const propina = computed(() => {
    const propinaTotal = (total.value * porcentaje.value) / 100;
    return (propinaTotal / personas.value).toFixed(2);
  });
  const totalConPropina = computed(() => {
    const propinaTotal = (total.value * porcentaje.value) / 100;
    return (parseFloat(total.value) + parseFloat(propinaTotal)).toFixed(2);
  });
  const totalConPropinaPorPersona = computed(() => {
    const propinaTotal = (total.value * porcentaje.value) / 100;
    const totalConPropina = parseFloat(total.value) + parseFloat(propinaTotal);
    return (totalConPropina / personas.value).toFixed(2);
  });
  return {
    total,
    porcentaje,
    personas,
    propina,
    totalConPropina,
    totalConPropinaPorPersona,
  };
});
