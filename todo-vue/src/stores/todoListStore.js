import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useTodoListStore = defineStore("todoList", () => {
    const todos = ref([]);
    function addTarea(text) {
        if (text.trim() === "") return;
        todos.value.push({text});
    }
    function deleteTarea(index) {
        todos.value.splice(index, 1);
    }

    return {
        todos,
        addTarea,
        deleteTarea,
    };
});
