<template>
  <div class="content-item-children-wrapper">
    <div class="content-item-children" :class="{active: active[i]}" v-for="(x, i) in object">
      <span class="part" v-if="x.part">{{ translatePart(x.part) }}</span>
      <sidebar-link :is-drawer="isDrawer" @toggle-collapse="active[i] = !active[i]" :title="x.title" :collapsable="x.children.length > 0" :route="x.route"/>
      <contents-children-renderer v-if="x.children.length > 0" :contents="x.children"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {ContentsItemChild, Part} from "~/static/types";

const props = defineProps({
  contents: {
    required: true
  },
  isDrawer: {
    type: Boolean,
    default: false
  }
});

const object = props.contents as ContentsItemChild[];
const active = ref(([] as boolean[]).fill(false, 0, object.length));

function translatePart(part: Part) {
  switch (part) {
    case "Library": return "库";
    case "Language": return "语言特性";
    default: return "";
  }
}
</script>

<style lang="scss" scoped>
.content-item-children-wrapper {
  margin-left: 16px;
}

.part {
  font-size: 10px;
  padding: 0 8px;
  line-height: 1;
  text-transform: uppercase;
}
</style>

<style lang="scss">
.content-item-children {
  display: none;
}

.active > .sidebar-link-wrapper > .sidebar-link svg {
  transform: rotate(-180deg);
}

.active > .content-item-children-wrapper > .content-item-children {
  display: block;
}
</style>