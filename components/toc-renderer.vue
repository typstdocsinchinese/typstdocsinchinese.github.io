<template>
  <div class="toc-item" v-for="x in object">
    <a :href="`#${x.id}`">{{ x.name }}</a>
    <toc-renderer v-if="x.children" :outline="x.children"/>
  </div>
</template>

<script lang="ts" setup>
import type {Outline} from "@/static/types";

const props = defineProps({
  outline: {
    required: true
  }
});

const object = ref(props.outline as Outline[]);
watch(() => props.outline, v => object.value = props.outline as Outline[]);
</script>

<style lang="scss">
.toc-item .toc-item {
  margin-left: 16px;
}
</style>