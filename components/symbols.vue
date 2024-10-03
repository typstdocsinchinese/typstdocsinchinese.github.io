<template>
  <h1>{{ object.name }}</h1>
  <div class="symbol-details" v-html="object.details"/>
  <div class="symbol-display">
    <div class="symbol" v-for="x in object.list">
      {{ x.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Symbols} from "~/static/types";

const props = defineProps({
  value: {
    required: true
  }
});

const object = props.value as Symbols;
</script>