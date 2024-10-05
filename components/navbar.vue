<template>
  <nav>
    <div class="logo-box">
      <img class="typst-logo" src="/typst.svg" alt="typst-logo"/>
      <span>中文文档</span>
    </div>
    <div class="spacer"/>
    <div class="right">
      <button class="nav-btn primary">
        访问 Typst 仓库
      </button>
      <a href="https://typst.app/docs" target="_blank">官方文档</a>
      <a href="https://github.com/typstdocsinchinese" target="_blank">翻译仓库</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 24px 32px;
  display: flex;
}

.typst-logo {
  filter: invert(47%) sepia(80%) saturate(436%) hue-rotate(139deg) brightness(95%) contrast(86%);
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 32px;

  > span {
    color: #565565;
    display: block;
    font-size: 18px;
    padding-bottom: 4px;
    max-width: 100%;
  }
}

.nav-btn {
  background-color: #ebf7f9;
  border-radius: 8px;
  color: #19181f;
  display: block;
  padding: 8px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }

  &.primary {
    background-color: #127885;
    color: #fdfdfd;
  }
}

.right {
  display: flex;
  align-items: center;
  gap: 22px;

  a {
    color: #565565;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
<script setup lang="ts">
</script>