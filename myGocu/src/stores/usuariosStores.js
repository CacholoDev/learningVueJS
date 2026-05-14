import {defineStore} from 'pinia';
import {ref} from 'vue';
import { addUsuario, getUsuarios } from '../services/usuariosService.js';
export const useUsuariosStore = defineStore('usuarios', () => {
    const usuarios = ref([
    {
        id: 1,
         nombre: 'Juan',
         apellido: 'Pérez',
         fechaNacimiento: '1990-01-01',
    },
    {
        id: 2,
         nombre: 'María',
         apellido: 'Gómez',
         fechaNacimiento: '1985-05-15',
    },
    {
        id: 3,
         nombre: 'Carlos',
         apellido: 'López',
         fechaNacimiento: '1992-09-30',
        
        },
    ]);
    async function fetchUsuarios() {
        try {
            const data = await getUsuarios();
            if (Array.isArray(data)) {
                usuarios.value = data;
            }
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
        }
    }

    async function agregarUsuario(usuario) {
        const created = await addUsuario(usuario);
        usuarios.value.push(created || usuario);
    }
    function hayUsuarios(){
        return usuarios.value.length > 0;
    }
    return {
        usuarios,
        fetchUsuarios,
        agregarUsuario,
        hayUsuarios
    };
});