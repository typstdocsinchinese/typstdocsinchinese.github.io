<template>
  <div class="content-item sidebar-link" v-for="x in object">
    <sidebar-link :route="x.route" :title="x.title" :collapsable="x.children.length > 0"/>
    <contents-children-renderer v-if="x.children.length > 0" :contents="x.children"/>
  </div>
</template>

<script lang="ts" setup>
import type {ContentsItem} from "@/static/types";
import ContentsChildrenRenderer from "~/components/contents-children-renderer.vue";

const props = defineProps({
  contents: {
    required: true
  }
});

const object = props.contents as ContentsItem[];
</script>