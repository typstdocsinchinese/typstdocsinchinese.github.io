<template>
  <div class="collapse-toggle-button">
    <icon :path="mdiChevronDown"/>
  </div>
</template>

<script lang="ts" setup>

import {mdiChevronDown} from "@mdi/js";
</script>

<style lang="scss" scoped>
.collapse-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #dfdfdf;
    border-radius: 10px;
  }
}
</style>