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
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 36px;
  grid-template-columns: minmax(auto, 184px) minmax(auto, 800px) minmax(auto, 144px);
  justify-content: center;
}
</style>