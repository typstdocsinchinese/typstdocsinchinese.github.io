<template>
  <div class="func">
    <component v-if="!omitName" :is="singlePage ? 'h1' : 'h3'" :id="getFunctionNameId(object.name)"><code>{{
        object.name
      }}</code></component>
    <div class="func-details" v-html="object.details"/>
    <div class="func-example" v-if="object.example" v-html="object.example"/>
    <h2 v-if="singlePage">Parameters</h2>
    <pre class="func-definition" v-html="`<code>${buildFunctionDefinition(object)}</code>`"/>
    <div class="func-params">
      <div class="param" v-for="x in object.params">
        <div class="param-title">
          <component :is="singlePage ? 'h3' : 'h4'" :id="getParamId(x.name, object.name)"><code>{{ x.name }}</code>
          </component>
          <div class="param-type" v-html="'<code>' + x.types.map(y => `<span class='type'>${y}</span>`).join(' | ') + '</code>'"/>
          <div class="param-props">
            <template v-for="y in ['positional', 'settable', 'variadic', 'required']">
              <span class="prop" v-if="x[y]">{{ Cap(y) }}</span>
            </template>
          </div>
        </div>
        <div class="param-details" v-html="x.details"/>
        <div v-if="x.example" class="param-example" v-html="x.example"/>
      </div>
    </div>
    <div class="func-scope scope" v-if="object.scope.length > 0">
      <h2 id="definitions">Definitions</h2>
      <func v-for="x in object.scope" :single-page="false" :value="x"/>
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

function Cap(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}

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

function buildFunctionDefinition(object: Func) {
  let res = '';
  const longParam = object.params.length >= 3;

  if (object.self) res += 'self.';
  if (object.path.length > 0) res += object.path.join('.') + '.';

  res += object.name;
  res += '(';
  if (object.params.length > 0) {
    res += longParam ? '\n  ' : ' ';
    res += object.params.map((x) => {
      let r = '';

      if (x.name && x.named) {
        r += `${x.name}: `
      }

      r += `<span class="type">${x.types.join(' | ')}</span>`;
      return r;
    }).join(`,${longParam ? '\n  ' : ' '}`);
    res += longParam ? '\n' : ' ';
  }
  res += ')';

  if (object.returns.length > 0) {
    res += ` -> ${object.returns.join(' | ')}`;
  }

  return res;
}

const object = props.value as Func;
</script>

<style lang="scss">
.param-title {
  display: flex;
  align-items: center;
  gap: 16px;

  .param-type {
    margin-left: 16px;
  }

  .param-props {
    display: flex;
    align-items: center;
    gap: 8px;

    .prop {
      font-style: italic;
    }
  }
}
</style>