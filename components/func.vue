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
          <div class="param-type" v-html="`<code>${buildSpansFromTypes(x.types).join(' | ')}</code>`"/>
          <div class="param-props">
            <template v-for="y in ['positional', 'settable', 'variadic', 'required']">
              <span class="prop" v-if="x[y]">{{ capitalize(y) }}</span>
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

/**
 * 使 str 首字母大写
 * @param str
 */
function capitalize(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}

/**
 * 根据一组字符串返回对应一组的 span 元素
 * @param types 包含类型的字符串
 */
function buildSpansFromTypes(types: string[]) {
  return types.map(y => `<span class="typ typ-${y}">${y}</span>`);
}

/**
 * 根据组件的相关配置与 name 的值，返回其 anchor 的内容
 * @param name 参数名称
 */
function getFunctionNameId(name: string) {
  if (props.singlePage) return 'summary';
  if (props.paramIdPrefix.length > 0) return `${props.paramIdPrefix}-${name}`;
  return `definitions-${name}`;
}

/**
 * 根据组件的相关配置与 name 和 objectName 的值，返回其 anchor 的内容
 * @param name 参数名称
 * @param objectName 函数名称
 */
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
  // else: should only be one of `self.` and path.
  else if (object.path.length > 0) res += object.path.join('.') + '.';

  res += object.name;
  res += '(';
  if (object.params.length > 0) {
    res += longParam ? '\n  ' : ' ';
    res += object.params.map((x) => {
      let r = '';

      if (x.name && x.named) {
        r += `${x.name}: `
      }

      r += buildSpansFromTypes(x.types).join(' | ');
      return r;
    }).join(`,${longParam ? '\n  ' : ' '}`);
    res += longParam ? '\n' : ' ';
  }
  res += ')';

  if (object.returns.length > 0) {
    res += ` -> ${buildSpansFromTypes(object.returns).join(' | ')}`;
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