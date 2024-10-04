<template>
  <h1 id="summary">{{ object.title }}</h1>
  <div class="group-details" v-html="object.details"/>
  <div class="group-functions">
    <h2>Functions</h2>
    <func param-id-prefix="functions" v-for="x in object.functions" :single-page="false" :value="x"/>
  </div>
</template>

<script lang="ts" setup>
import type {Group} from "~/static/types";

const props = defineProps({
  value: {
    required: true
  }
});

const object = props.value as Group;
</script>