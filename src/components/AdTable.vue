<template>
  <main class="table">
    <div class="header">
      <span>Item</span>
      <span>Tracking ID</span>
      <span>Total weight (kg)</span>
      <span>Shipment status</span>
      <span>Estimated arrival</span>
      <span>Destination</span>
    </div>
    <AdModal
        item="PlayStation 5"
        id="20087452"
        weigth="20kg"
        status="Pending"
        destination="Ikeja, Lagos"
    />
    <AdModal
        item="Razor Laptop"
        id="20087452"
        weigth="10kg"
        status="In Transit"
        destination="Ikeja, Lagos"
    />
    <AdModal
        item="Aesop Skincare"
        id="2000342194i"
        weigth="15kg"
        status="In Transit"
        destination="Ikeja, Lagos"
    />
    <AdModal
        item="Yeezy Sneakers"
        id="2000342194i"
        weigth="9kg"
        status="In Transit"
        destination="Ikeja, Lagos"
    />
    <AdModal
        item="Ankle Sound"
        id="2000342194i"
        weigth="64kg"
        status="Delivered"
        destination="Ikeja, Lagos"
    />
    <AdModal
        item="Sofa chair set"
        id="2000342194i"
        weigth="100kg"
        status="Delayed"
        destination="Ikeja, Lagos"
    /> 
  </main>
</template>
<script setup>
import AdModal from ".//AdModal.vue";
</script>
<style scoped>
.table {
  @apply grid w-full gap-2;
}
.header {
  @apply bg-white py-5 text-sm flex px-5;
}
.header span {
  @apply text-sm text-[gray];
}
span {
  @apply min-w-[17%];
}
</style>
