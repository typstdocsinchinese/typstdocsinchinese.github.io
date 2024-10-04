<template>
  <h1 id="summary">{{ object.title }}</h1>
  <div class="category-details" v-html="object.details"/>
  <h2 id="definitions">Definitions</h2>
  <ul>
    <li v-for="x in object.items">
      <router-link :to="x.route">{{ x.name }}</router-link>
      — {{ x.oneliner }}
    </li>
  </ul>
  <div class="category-shorthands" v-if="object.shorthands">
    <h2 id="shorthands">Shorthands</h2>
    <p>Shorthands are concise sequences of characters that evoke specific glyphs. Shorthands and other ways to produce
      symbols can be used interchangeably. You can use different sets of shorthands in math and markup mode. Some
      shorthands, like ~ for a non-breaking space produce non-printing symbols, which are indicated with gray
      placeholder text.</p>
    <p>
      You can deactivate a shorthand's interpretation by escaping any of its characters. If you escape a single
      character in a shorthand, the remaining unescaped characters may form a different shorthand.</p>
    <h3>Within Markup Mode</h3>
    <div class="shorthands">
      <div class="shorthand" v-for="x in object.shorthands['markup']">
        {{ x.name }}
      </div>
    </div>
    <h3>Within Math Mode</h3>
    <div class="shorthands">
      <div class="shorthand" v-for="x in object.shorthands['math']">
        {{ x.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Category} from "~/static/types";

const props = defineProps({
  value: {
    required: true
  }
});

const object = props.value as Category;
</script>