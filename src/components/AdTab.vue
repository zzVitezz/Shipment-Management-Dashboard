<template>
    <ul class="nav">
      <li class="nav__item"><a href="#">All</a></li>
      <li class="nav__item"><a href="#">In Transit</a></li>
      <li class="nav__item"><a href="#">Pending</a></li>
      <li class="nav__item"><a href="#">Delivered</a></li>
      <li class="nav__item"><a href="#">Delayed</a></li>
    </ul>
</template>
<style>
.nav{
    @apply flex;
}
.nav__item{
    @apply bg-white rounded-xl px-3 py-2 text-sm mr-2;
}
.nav__item:last-child{
    @apply mr-0;
}
.nav__item:hover{
    @apply bg-[#5394e6] text-white ;

}
</style>
