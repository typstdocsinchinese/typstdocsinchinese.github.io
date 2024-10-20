<template>
  <div class="toc-item" v-for="x in object">
    <a @click="setActive(x.id, true)" :class="{active: activeMap[x.id]}" :href="`#${x.id}`">{{ x.name }}</a>
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

const activeMap = reactive<{[prop: string]: boolean}>({})
const tempoDisableScrollSetActive = ref(false);

function getVisible() {
  const withId = Array.from(document.querySelectorAll('h2[id], h3[id]'));
  const visible = withId.filter(x => isElementInViewport(x));
  if (visible.length === 0) return null;
  return visible;
}

function getLastVisible() {
  const visible = getVisible();
  if (visible === null) return null;
  return visible[visible.length - 1];
}

function getFirstVisible() {
  const visible = getVisible();
  if (visible === null) return null;
  return visible[0];
}

function setActive(id: string, tempDisable = false) {
  if (tempDisable) tempoDisableScrollSetActive.value = true;
  setNonActive();
  activeMap[id] = true;
}

function setNonActive() {
  Object.keys(activeMap).forEach(k => activeMap[k] = false);
}

function setActiveLastVisible() {
  const lastVisible = getLastVisible();
  if (lastVisible === null) return;
  setActive(lastVisible.id);
}

function setActiveFirstVisible() {
  const firstVisible = getFirstVisible();
  if (firstVisible === null) return;
  setActive(firstVisible.id);
}

function listener() {
  if (tempoDisableScrollSetActive.value) {
    tempoDisableScrollSetActive.value = false;
    return;
  }
  if (window.scrollY === 0) setActiveFirstVisible();
  else setActiveLastVisible();
}

watch(() => useRoute().fullPath, () => {
  if (useRoute().hash) setActive(useRoute().hash.replace('#', ''))
  else setActiveFirstVisible();

  window.removeEventListener('scroll', listener);
  window.addEventListener('scroll', listener);
}, {
  immediate: true
})
</script>

<style lang="scss">
.toc-item .toc-item {
  margin-left: 16px;
}

.toc-item {
  margin-bottom: 4px;
}

.toc-item a {
  color: inherit;
  text-decoration: none;
  &.active {
    color: #11566c;
    font-weight: bold;
  }
}
</style>