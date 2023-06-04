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
    <AdModal>
      <div class="row">
        <span>PlayStation 5</span>
        <span>20087452</span>
        <span>20kg</span>
        <span><a class="status pending">Pending</a></span>
        <span>-</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
    <AdModal>
      <div class="row">
        <span>Razor Laptop</span>
        <span>20087452</span>
        <span>10kg</span>
        <span><a class="status in-transit">In Transit</a></span>
        <span>11 Oct, 9:40am</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
    <AdModal>
      <div class="row">
        <span>Aesop Skincare</span>
        <span>2000342194i</span>
        <span>15kg</span>
        <span><a class="status in-transit">In Transit</a></span>
        <span>04 Oct, 12:20pm</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
    <AdModal>
      <div class="row">
        <span>Yeezy Sneakers</span>
        <span>2000342194i</span>
        <span>9kg</span>
        <span><a class="status in-transit">In Transit</a></span>
        <span>30 Sep, 11:00 am</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
    <AdModal>
      <div class="row">
        <span>Ankle Sound</span>
        <span>2000342194i</span>
        <span>64kg</span>
        <span><a class="status delivered">Delivered</a></span>
        <span>08 Oct, 14:25pm</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
    <AdModal>
      <div class="row">
        <span>Sofa chair set</span>
        <span>2000342194i</span>
        <span>100kg</span>
        <span><a class="status delayed">Delayed</a></span>
        <span>15 Sep, 8:05pm</span>
        <span>Ikeja, Lagos</span>
      </div>
    </AdModal>
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
.row {
  @apply bg-white py-5 text-sm flex px-5 font-semibold text-[#091E42] text-left;
}
.row span {
  @apply text-[16px];
}
.row:hover {
  @apply bg-[#F5F6F8];
}
span {
  @apply min-w-[17%];
}
</style>
