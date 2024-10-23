<template>
  <div class="contents">
    <contents-renderer :is-drawer="isDrawer" :contents="contents"/>
  </div>
</template>

<script lang="ts" setup>
import contents from '@/static/contents.json';
import ContentsRenderer from "~/components/contents-renderer.vue";

const props = defineProps({
  isDrawer: {
    type: Boolean,
    default: false
  }
})
</script>