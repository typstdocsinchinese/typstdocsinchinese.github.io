<template>
  <footer>
    <div class="wrapper">
      <div class="left">
        <p>这些文档是由 <a href="https://github.com/typstdocsinchinese" target="_blank">typstdocsinchinese</a> 组织成员翻译的，可能存在瑕疵，不保证绝对准确性。</p>
        <p><small>&copy; {{ new Date().getFullYear() }} Contributors · Built with Nuxt 3</small></p>
      </div>
      <div class="spacer"/>
      <div class="right">
        <img draggable="false" src="/written-by-human-not-by-ai.svg" alt="not-by-ai">
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  padding: 16px;
  border-top: 1px solid rgba(0, 0, 0, .21);
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 4px;
    }
  }

  .left {
    max-width: 400px;
  }

  p {
    margin: 8px 0;
    line-height: 1.5;
  }

  .right {
    display: flex;
    align-items: center;
    min-width: 200px;

    @media (max-width: 768px) {
      min-width: unset;
    }
  }
}
</style>
<script setup lang="ts">
</script>