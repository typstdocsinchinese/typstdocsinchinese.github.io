<template>
  <div class="outlines" v-if="outline !== null && outline.length !== 0">
    <toc-renderer :outline="outline"/>
  </div>
</template>

<script lang="ts" setup>
import type {Outline} from "~/static/types";
import TocRenderer from "~/components/toc-renderer.vue";
import useOutline from "~/composables/useOutline";

const outline = useOutline();
</script>