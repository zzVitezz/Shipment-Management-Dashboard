<template>
  <span class="material-symbols-outlined rounded-2xl bg-white p-1">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    {{icon}}
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: String
})
</script>