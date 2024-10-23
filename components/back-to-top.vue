<template>
  <button class="back-to-top" @click="scroll" :class="{active}">
    <icon :path="mdiArrowUp"/> 返回顶部
  </button>
</template>
<script setup lang="ts">
import {mdiArrowUp} from "@mdi/js";

const active = ref(false);

function scroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

if (window) {
  window.addEventListener("scroll", e => {
    active.value =  window.scrollY >= (window.innerWidth <= 768 ? 300 : 700);
  })
}
</script>

<style lang="scss">
.back-to-top {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  justify-content: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  bottom: 64px;
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
  border: 1px solid rgba(0, 0, 0, .21);
  z-index: 500;
  cursor: pointer;
  transition: all .2s ease;
  opacity: 0;
  font-size: 16px;

  &:active {
    background: #dfdfdf;
  }

  &.active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
    color: #11566c;
    transform: translateX(-50%) translateY(-4px);
  }
}
</style>