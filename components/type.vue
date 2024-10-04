<template>
  <h1 id="summary"><code>{{ object.name }}</code></h1>
  <div class="type-details" v-html="object.details"/>
  <div class="type-constructor" v-if="object.constructor">
    <h2>Constructor</h2>
    <func param-id-prefix="constructor" :omit-name="true" :single-page="false" :value="object.constructor"/>
  </div>
  <div class="type-scope" v-if="object.scope.length > 0">
    <h2>Definitions</h2>
    <func v-for="x in object.scope" :single-page="false" :value="x"/>
  </div>
</template>
<script setup lang="ts">
import type {Func, Type} from "@/static/types";

const props = defineProps({
  value: {
    required: true
  }
});

const object = props.value as Type;
</script>