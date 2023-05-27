<template>
  <main class="p-7 h-full w-full bg-[#F5F6F8]">
    <section class="flex items-center">
      <div class="flex flex-grow items-center">
        <input
          type="text"
          class="rounded-md w-[500px] pl-10 py-2 relative"
          placeholder="Search shipment by tracking ID"
        />
        <AdIcon class="absolute ml-1" icon="search" />
      </div>
      <button><AdIcon class="mr-6" icon="notifications" /></button>
      <button><AdIcon class="mr-6" icon="settings" /></button>
      <button class="flex items-center bg-white rounded-xl">
        <AdIcon class="mr-2" icon="account_circle" />
        <span class="text-[#5394e6] mr-2 font-semibold">Atlantis paradise</span>
        <AdIcon class="text-[#5394e6]" icon="expand_more" />
      </button>
    </section>
    <section class="flex flex-col">
      <div class="flex my-7">
        <span class="flex flex-grow font-semibold text-2xl">Shipments</span>
        <AdTab/>
      </div>
      <AdTable/>
    </section>
  </main>
</template>
<script setup>
import AdIcon from "../components/AdIcon.vue";
import AdTab from "../components/AdTab.vue";
import AdTable from "../components/AdTable.vue";
</script>

