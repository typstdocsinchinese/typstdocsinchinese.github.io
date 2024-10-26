<template>
  <div class="contents">
    <contents-renderer :is-drawer="isDrawer" :contents="contents"/>
  </div>
</template>

<script lang="ts" setup>
import contents from '@/static/contents.json';

const props = defineProps({
  isDrawer: {
    type: Boolean,
    default: false
  }
});

// 为当前页面自动展开侧边栏
onMounted(() => {
  const contentItems = Array.from(document.querySelectorAll('.content-item'));
  const filtered = contentItems.filter(x => x.querySelector('.sidebar-link.exact-active') !== null);
  if (filtered.length > 0) {
    let current = filtered[0];
    current.classList.add('active');
    while (current.querySelector(':scope > .sidebar-link-wrapper > .sidebar-link.exact-active') === null) {
      let targets = Array.from(current.querySelectorAll(':scope > .content-item-children-wrapper > .content-item-children'))
          .filter(x => x.querySelector('.sidebar-link.exact-active') !== null);
      if (targets.length === 0) break;
      current = targets[0];
      current.classList.add('active');
      console.log(current.classList);
    }
  }
})
</script>