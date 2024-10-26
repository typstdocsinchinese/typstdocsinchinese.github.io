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
  link: [
    {rel: 'canonical', href: 'https://typstdocsinchinese.github.io/docs'},
    {rel: 'manifest', href: '/resources/site.webmanifest'},
    {rel: 'mask-icon', href: '/resources/safari-pinned-tab.svg'},
    {rel: 'apple-touch-icon', href: '/resources/apple-touch-icon.png'},
    {rel: 'icon', href: '/resources/favicon-32x32.png', sizes: '32x32'},
    {rel: 'icon', href: '/resources/favicon-16x16.png', sizes: '16x16'},
  ]
});

useSeoMeta({
  title: () => docTitle.value.length > 0 ? `${docTitle.value} - Typst 非官方中文文档` : `Typst 非官方中文文档`,
  ogTitle: 'Typst 非官方中文文档 - by typstdocsinchinese',
  description: 'Typst 的非官方中文文档，致力于提供易懂内容。',
  ogDescription: 'Yet Another Typst 的非官方中文文档，致力于提供易懂内容。',
  ogImage: 'https://typst.app/assets/social.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: '该图片展示了一个文本编辑器的左部分，上带有多种颜色的指针，旁边写着“Compose papers faster, Typst”',
  ogType: 'website',
  themeColor: '#239dad',
  twitterCard: 'summary_large_image',
  twitterSite: '@typstapp',
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