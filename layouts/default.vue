<template>
  <navbar/>
  <main>
    <client-only>
      <contents class="geq-768"/>
    </client-only>
    <slot/>
    <client-only>
      <toc/>
    </client-only>
  </main>
  <Footer/>
  <back-to-top/>
</template>

<script lang="ts" setup>

import BackToTop from "~/components/back-to-top.vue";
import useDocTitle from "~/composables/useDocTitle";

const docTitle = useDocTitle();

useHead({
  title: () => docTitle.value.length > 0 ? `${docTitle.value} - Typst 非官方中文文档` : `Typst 非官方中文文档`,
  meta: [
    {name: 'description', content: 'Typst 的非官方中文文档，致力于提供易懂内容。'}
  ]
});

useSeoMeta({
  title: () => docTitle.value.length > 0 ? `${docTitle.value} - Typst 非官方中文文档` : `Typst 非官方中文文档`,
  ogTitle: 'Typst 非官方中文文档 - by typstdocsinchinese',
  description: 'Typst 的非官方中文文档，致力于提供易懂内容。',
  ogDescription: 'Yet Another Typst 的非官方中文文档，致力于提供易懂内容。'
})
</script>

<style lang="scss" scoped>
main {
  display: grid;
  gap: 36px;
  grid-template-columns: minmax(auto, 184px) minmax(auto, 800px) minmax(auto, 144px);
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(auto, 184px) auto;
  }

  @media (max-width: 1200px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 0 16px;
  }
}
</style>