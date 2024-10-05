<template>
  <div class="content-item-children-wrapper">
    <div class="content-item-children" v-for="x in object">
      <sidebar-link :title="x.title" :collapsable="x.children.length > 0" :route="x.route"/>
      <contents-children-renderer v-if="x.children.length > 0" :contents="x.children"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {ContentsItemChild} from "~/static/types";
import SidebarLink from "~/components/sidebar-link.vue";

const props = defineProps({
  contents: {
    required: true
  }
});

const object = props.contents as ContentsItemChild[];
</script>

<style lang="scss" scoped>
.content-item-children-wrapper {
  margin-left: 16px;
}
</style>