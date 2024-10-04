<template>
  <div class="content-item" v-for="x in object">
    <router-link :to="x.route">{{ x.title }}</router-link>
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