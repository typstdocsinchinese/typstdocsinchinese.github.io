<template>
  <div class="content-item" :class="{active: active[i]}" v-for="(x, i) in object">
    <sidebar-link @toggle-collapse="active[i] = !active[i]" :route="x.route" :title="x.title" :collapsable="x.children.length > 0"/>
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
const active = ref(([] as boolean[]).fill(false, 0, object.length));
</script>