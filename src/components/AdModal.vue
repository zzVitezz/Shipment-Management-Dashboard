<template>
  <button @click="modal=true">
  <slot></slot>
  </button>
  <Teleport to="body">
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-20 backdrop-blur-sm">
      <div ref="modalRef" class="fixed left-1/2 top-1/2 w-[60%] h-[80%] z-40 translate-y-[-50%] translate-x-[-50%] bg-white rounded-md">

      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { OnClickOutsideHandler } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";

const modal = ref(false);
const modalRef = ref(null);

onClickOutside(modalRef, (event) => {
  modal.value = false;
});

</script>
