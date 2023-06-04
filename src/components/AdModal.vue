<template>
  <button @click="modal=true">
    <div class="row">
        <span>{{ item }}</span>
        <span>{{  id }}</span>
        <span>{{ weigth }}</span>
        <span><a :class="getStatus(status)" class="status">{{ status }}</a></span>
        <span>{{ arrival }}</span>
        <span>{{ destination}}</span>
      </div>
  </button>
  <Teleport to="body">
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-20 backdrop-blur-sm">
      <div ref="modalRef" class="fixed left-1/2 top-1/2 w-[60%] h-[80%] z-40 translate-y-[-50%] translate-x-[-50%] bg-white rounded-md">
        <section class="flex flex-col p-7 w-full justify-between h-full">
          <button class="text-right font-bold ">X</button>
          <h1>Name</h1>
          <p> {{ item }}</p>
          <h1>Description</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit placeat inventore aliquid ullam non perspiciatis, est cum tempore vel pariatur reprehenderit iusto at eius unde blanditiis culpa aspernatur quia voluptas.</p>
          <h1>Tracking ID</h1>
          <p> {{ id }}</p>
          <h1>Total Weigth (kg)</h1>
          <p>{{ weigth }}</p>
          <h1>Status</h1>
          <p>{{ status }}</p>
          <h1>Estimated Arrival </h1>
          <p>{{ arrival }}</p>
          <h1>Destination </h1>
          <p>{{ destination }}</p>
          <button class="bg-[#4ea3eb] text-white rounded-xl w-fit px-5 py-2 mx-auto ">Edit</button>
        </section>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { OnClickOutsideHandler } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  item: { type: String, default: "-" },
  id: { type: String, default: "-" },
  weigth: { type: String, default: "-" },
  status: { type: String, default: "-" },
  arrival: { type: String, default: "-" },
  destination: { type: String, default: "-" },
})

const modal = ref(false);
const modalRef = ref(null);

onClickOutside(modalRef, (event) => {
  modal.value = false;
});

const getStatus = function(status:String){
  return status.replace(/ /g,"").toLowerCase()
}
 
</script>
<style scoped>
.row {
  @apply bg-white py-5 text-sm flex px-5 font-semibold text-[#091E42] text-left;
}
.row span {
  @apply text-[16px] min-w-[17%];
}
.row:hover {
  @apply bg-[#F5F6F8];
}
h1{
  @apply text-xl font-semibold;
}
</style>