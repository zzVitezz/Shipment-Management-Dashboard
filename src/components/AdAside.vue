<template>
  <aside class="flex flex-col flex-grow py-7 max-w-[270px] min-w-[270px]">
    <router-link to="" class="logo">
      <img
        src="https://cdn.dribbble.com/users/763495/screenshots/4651910/attachments/1050891/visual-studio.png"
      />
      <span class="font-bold text-xl">Codex</span>
    </router-link>
    <nav class="menu">
      <router-link to="/Home" active-class="active" class="menu__item">
        <AdIcon icon="home" /> <span>Home</span>
      </router-link>
      <router-link to="/OrderHistory" active-class="active" class="menu__item">
        <AdIcon icon="layers" /> <span>Order History</span>
      </router-link>
      <router-link to="/Shipments" active-class="active" class="menu__item">
        <AdIcon icon="deployed_code" /> <span>Shipments</span>
      </router-link>
      <router-link to="/BillingDetails" active-class="active" class="menu__item">
        <AdIcon icon="release_alert" />
        <span>Billing Details</span>
      </router-link>
      <router-link to="/Promotions" active-class="active" class="menu__item">
        <AdIcon icon="folder_copy" /> <span>Promotions</span>
      </router-link>
      <li class="menu__btn">
        <button>+ Add Shipment</button>
      </li>
      <router-link to="" class="menu__item">
        <AdIcon icon="call" /> <span>Help & Support</span>
      </router-link>
      <router-link to="" class="menu__item">
        <AdIcon icon="logout" /> <span>LogOut</span>
      </router-link>
    </nav>
  </aside>
</template>
<script setup>
import AdIcon from ".//AdIcon.vue";
</script>
<style>
.logo {
  @apply flex items-center mb-16 px-10;
}
.logo img{
  @apply w-10 p-1;
}
.menu {
  @apply flex flex-grow flex-col;
}
.menu__item {
  @apply flex items-center mb-4 font-semibold text-[#091E42] px-10;
}
.menu__item:hover {
  color: #5394e6;
}
.menu__item.active {
  color: #5394e6;
  border-color: #5394e6;
  border-right: 3px solid;
}
.menu__item:last-child {
  @apply mb-0;
}
.menu__btn {
  @apply flex flex-col flex-grow justify-center px-10 font-semibold;
}
.menu__btn button{
  @apply bg-[#EBF5FD] px-3 py-2 rounded-md
}
.menu__btn button:hover{
  @apply bg-[#EBF5FD] font-semibold;
}
.AdIcon {
  @apply mr-1;
}
</style>
