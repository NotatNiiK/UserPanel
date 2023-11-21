<template>
  <ul class="pagination">
    <li class="pagination__item" v-for="page in totalPages" :key="page">
      <v-btn
        size="x-small"
        @click="changePage(page)"
        :color="currentPage === page ? 'primary' : ''"
        >{{ page }}</v-btn
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IProps {
  totalPages: number;
  currentPage: number;
}

interface Emits {
  (e: "change-page", page: number): void;
}

defineProps<IProps>();
const emit = defineEmits<Emits>();

function changePage(page: number): void {
  emit("change-page", page);
}
</script>

<style scoped lang="scss">
.pagination {
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__item {
    margin: 0 5px;
  }
}
</style>
