<template>
  <div class="outlines" v-if="outline !== null && outline.length !== 0">
    <div class="outline-title">本页内容</div>
    <toc-renderer :outline="outline"/>
  </div>
</template>

<script lang="ts" setup>
import TocRenderer from "~/components/toc-renderer.vue";
import useOutline from "~/composables/useOutline";

const outline = useOutline();
</script>

<style lang="scss">
.outline-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-decoration: underline;
}

.outlines {
  color: #565565;
  position: sticky;
  top: 24px;
  height: min-content;
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
}
</style>