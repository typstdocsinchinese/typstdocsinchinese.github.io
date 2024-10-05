<template>
  <div class="sidebar-link">
    <router-link :to="route">{{ title }}
      <template v-if="collapsable">
        <div class="spacer"/>
        <collapse-toggle/>
      </template>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  route: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  collapsable: {
    required: true,
    type: Boolean
  }
})
</script>

<style lang="scss">
@use '@/assets/global';

.sidebar-link a {
  text-decoration: none;
  color: black;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  margin: 4px 0;
  display: flex;
  align-items: center;

  &.router-link-exact-active {
    background: #efefef;
    color: global.$primary;
  }

  &:hover {
    background: #efefef;
  }
}
</style>