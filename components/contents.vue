<template>
  <div class="contents">
    <contents-renderer :contents="contents"/>
  </div>
</template>

<script lang="ts" setup>
import contents from '@/static/contents.json';
import ContentsRenderer from "~/components/contents-renderer.vue";

</script>