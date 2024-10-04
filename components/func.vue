<template>
  <div class="func">
    <component v-if="!omitName" :is="singlePage ? 'h1' : 'h3'" :id="getFunctionNameId(object.name)"><code>{{
        object.name
      }}</code></component>
    <div class="func-details" v-html="object.details"/>
    <div class="func-example" v-if="object.example" v-html="object.example"/>
    <h2 v-if="singlePage">Parameters</h2>
    <pre class="func-definition">
      <code>
      {{ object.self ? 'self.' : '' }}{{ object.name }}({{ object.params.map(x => x.types.join(' or ')).join(', ') }}) -> {{
          object.returns.join(' or ')
        }}
      </code>
    </pre>
    <div class="func-params">
      <div class="param" v-for="x in object.params">
        <component :is="singlePage ? 'h3' : 'h4'" :id="getParamId(x.name, object.name)"><code>{{ x.name }}</code>
          <small>{{ x.types.join(' or ') }}</small></component>
        <div class="param-details" v-html="x.details"/>
        <div v-if="x.example" class="param-example" v-html="x.example"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Func} from "~/static/types";

const props = defineProps({
  value: {
    required: true
  },
  omitName: {
    default: false
  },
  singlePage: {
    default: true
  },
  paramIdPrefix: {
    default: ''
  }
});

function getFunctionNameId(name: string) {
  if (props.singlePage) return 'summary';
  if (props.paramIdPrefix.length > 0) return `${props.paramIdPrefix}-${name}`;
  return `definitions-${name}`;
}

function getParamId(name: string, objectName = '') {
  if (props.singlePage) return `parameters-${name}`;
  if (props.paramIdPrefix.length > 0)
    return props.paramIdPrefix === 'constructor'
        ? `${props.paramIdPrefix}-${name}`
        : `${props.paramIdPrefix}-${objectName}-${name}`;
  return `definitions-${objectName}-${name}`;
}

const object = props.value as Func;
</script>