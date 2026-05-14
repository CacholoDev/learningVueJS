import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

export const useEmpleadosStore = defineStore('empleados', () => {
    const empleados = ref([
  { id: 1, nombre: 'Ana García', departamento: 'Diseño', salario: 28000 },
  { id: 2, nombre: 'Carlos López', departamento: 'Dev', salario: 35000 },
  { id: 3, nombre: 'María Martínez', departamento: 'Marketing', salario: 26000 },
  { id: 4, nombre: 'Manolo Sánchez', departamento: 'Dev', salario: 38000 },
  { id: 5, nombre: 'Laura Fernández', departamento: 'Diseño', salario: 29000 },
  { id: 6, nombre: 'Javier Ruiz', departamento: 'Marketing', salario: 27000 },
]);
    const searchQuery = ref('');

    const empleadosFiltrados = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();
        if (!query) return empleados.value;
        return empleados.value.filter(e => e.nombre.toLowerCase().includes(query));
    });

    function despedirEmpleado(id) {
        empleados.value = empleados.value.filter(e => e.id !== id);
    }

    function totalEmpleados() {
        return empleados.value.length;
    }

    function salarioPromedio() {
        if (empleados.value.length === 0) return 0;
        const totalSalario = empleados.value.reduce((sum, e) => sum + e.salario, 0);
        return (totalSalario / empleados.value.length).toFixed(2);
    }

    function colorBadgeDepartamento(departamento) {
        switch (departamento) {
            case 'Diseño': return 'bg-blue-500';
            case 'Dev': return 'bg-green-500';
            case 'Marketing': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    }

    return {
        empleados,
        searchQuery,
        empleadosFiltrados,
        despedirEmpleado,
        totalEmpleados,
        salarioPromedio,
        colorBadgeDepartamento
    }
});