<template>
  <nav>
    <button @click="toggleDrawer()" class="mobile-menu-btn leq-768">
      <icon :path="mdiMenu"/>
    </button>
    <div class="logo-box geq-768" @click="navigateTo('/docs')">
      <img class="typst-logo" src="/typst.svg" alt="typst-logo"/>
      <span>非官方中文文档</span>
    </div>
    <div class="spacer"/>
    <div class="right">
      <button class="nav-btn primary geq-768">
        访问 Typst 官方仓库
      </button>
      <button class="nav-btn primary leq-768">
        官方仓库
      </button>
      <a href="https://typst.app/docs" target="_blank">英文原文</a>
      <a href="https://github.com/typstdocsinchinese" target="_blank">参与贡献</a>
    </div>
  </nav>
  <transition name="fade">
    <div class="drawer-layer" @click.self="drawerState = false" v-if="drawerState">
      <transition name="flow-left" appear>
        <div class="drawer" v-if="drawerState">
          <div class="drawer-header">
            <img class="typst-logo" src="/typst.svg" alt="typst-logo"/>
            <span>非官方中文文档</span>
          </div>
          <div class="drawer-body">
            <contents :is-drawer="true"/>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active,
.flow-left-enter-active,
.flow-left-leave-active {
  transition: all .2s ease;
}

.flow-left-enter-from,
.flow-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.mobile-menu-btn {
  margin-right: 16px;
  color: #414141;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, .1);
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all .2s ease;
  cursor: pointer;
  position: fixed;
  top: 24px;
  z-index: 20;

  &:hover {
    background: #efefef;
  }

  &:active {
    background: #dfdfdf;
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

.drawer-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  z-index: 800;

  .drawer {
    background: white;
    min-width: 70%;
    box-sizing: border-box;
    padding: 16px;
    overflow-y: auto;
    scrollbar-width: none;

    .drawer-header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 16px;
      padding: 0 8px 16px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      span {
        font-size: 18px;
      }
    }

    .drawer-body {
      padding-top: 8px;
    }
  }
}
</style>

<style lang="scss" scoped>
nav {
  padding: 24px 32px;
  display: flex;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
}

.typst-logo {
  transform: translateY(2px); // baseline align
  filter: invert(47%) sepia(80%) saturate(436%) hue-rotate(139deg) brightness(95%) contrast(86%);
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 16px;
  }

  > span {
    color: #565565;
    display: block;
    font-size: 18px;
    padding-bottom: 4px;
    max-width: 100%;
  }
}

.right {
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 16px;
    flex-direction: row-reverse;
  }

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
import {mdiMenu} from "@mdi/js";
import useDrawerState from "~/composables/useDrawerState";

const drawerState = useDrawerState();

function toggleDrawer() {
  drawerState.value = !drawerState.value;
}
</script>