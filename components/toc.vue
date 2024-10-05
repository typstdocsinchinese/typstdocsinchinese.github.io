<template>
  <div class="outlines" v-if="outline !== null && outline.length !== 0">
    <h5>TOC</h5>
    <toc-renderer :outline="outline"/>
  </div>
</template>

<script lang="ts" setup>
import TocRenderer from "~/components/toc-renderer.vue";
import useOutline from "~/composables/useOutline";

const outline = useOutline();
</script>