<template>
  <navbar/>
  <main>
    <client-only>
      <contents/>
    </client-only>
    <slot/>
    <client-only>
      <toc/>
    </client-only>
  </main>
  <Footer/>
  <back-to-top/>
</template>

<script lang="ts" setup>

import BackToTop from "~/components/back-to-top.vue";
</script>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 36px;
  grid-template-columns: minmax(auto, 184px) minmax(auto, 800px) minmax(auto, 144px);
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(auto, 184px) auto;
  }
}
</style>