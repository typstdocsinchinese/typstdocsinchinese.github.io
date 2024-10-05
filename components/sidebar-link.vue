<template>
  <div class="sidebar-link-wrapper">
    <div class="sidebar-link" :class="{'exact-active': exactActive}" @click.self="navigateTo(route)">
      {{ title }}
      <template v-if="collapsable">
        <div class="spacer"/>
        <collapse-toggle @click="$emit('toggle-collapse')"/>
      </template>
    </div>
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
});

const exactActive = computed(() => useRoute().fullPath === props.route);
</script>

<style lang="scss">
@use '@/assets/global';

.sidebar-link-wrapper .sidebar-link {
  text-decoration: none;
  color: black;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  margin: 4px 0;
  display: flex;
  align-items: center;

  svg {
    transition: all .2s ease;
  }

  &.exact-active {
    background: #efefef;
    color: global.$primary;
  }

  &:hover {
    background: #efefef;
  }
}
</style>