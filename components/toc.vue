<template>
  <div class="outlines" v-if="outline !== null && outline.length !== 0">
    <toc-renderer :outline="outline"/>
  </div>
</template>

<script lang="ts" setup>
import type {Outline} from "~/static/types";
import TocRenderer from "~/components/toc-renderer.vue";

const outline = useState<Outline[] | null>('outline', () => null)
</script>