<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);

function onClickAway() {
  isVisible.value = false;
}
</script>

<template>
  <div v-clickaway="onClickAway">
    <p v-if="isVisible">This text is visible!</p>
  </div>
</template>
