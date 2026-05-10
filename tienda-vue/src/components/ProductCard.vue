<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

function addProduct() {
  emit("add-to-cart", props.product);
}
</script>

<template>
  <div class="product-card border p-4 rounded shadow">
    <h3>{{ props.product.name }}</h3>
    <p>Price: ${{ props.product.price }}</p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-red-300" @click="addProduct">
      Añadir al carrito
    </button>
  </div>
</template>
