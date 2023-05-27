<template>
  <AdPage>
    <AdWrapper>
      <AdAside />
      <router-view/>
    </AdWrapper>
  </AdPage>
</template>

<script setup>
import AdPage from ".//components/AdPage.vue";
import AdWrapper from ".//components/AdWrapper.vue";
import AdAside from ".//components/AdAside.vue";
</script>
