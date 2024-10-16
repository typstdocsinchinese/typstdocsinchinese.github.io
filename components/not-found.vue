<template>
  <h1>404 - Not Found</h1>
  <p>你所请求的页面 <code class="typ-str">"{{ useRoute().fullPath }}"</code> 不存在，请检查 URL 是否正确。<button class="nav-btn primary" @click="useRouter().go(-1)">&laquo; 返回上一页</button></p>
</template>

<style lang="scss" scoped>
.nav-btn {
  margin-top: 16px;
}
</style>