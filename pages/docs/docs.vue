<template>
  <div class="page-html" v-if="pageType === PageType.HTML" v-html="htmlBody"></div>
  <div class="page-category" v-else-if="pageType === PageType.Category">
    <Category :value="object"/>
  </div>
  <div class="page-type" v-else-if="pageType === PageType.Type">
    <Type :value="object"/>
  </div>
  <div class="page-func" v-else-if="pageType === PageType.Func">
    <Func :value="object"/>
  </div>
  <div class="page-group" v-else-if="pageType === PageType.Group">
    <Group :value="object"/>
  </div>
  <div class="page-symbols" v-else-if="pageType === PageType.Symbols">
    <Symbols :value="object"/>
  </div>
</template>

<script lang="ts" setup>
import {
  type Category,
  type Func,
  type Group,
  type Nullable,
  type Outline,
  PageType,
  type Route,
  type Symbols,
  type Type
} from "@/static/types";
import withoutEndingSlash from "~/utils/withoutEndingSlash";

const docPath = `/docs${withoutEndingSlash(useRoute().params.docPath as string)}`;

const pageType = ref<PageType>(PageType.Unknown);
const title = ref('');
const description = ref('');
const outline = ref<Outline[]>([]);

const htmlBody = ref('');
const object = ref<Nullable<Func | Category | Type | Group | Symbols>>(null);

async function fetchDocumentation() {
  const res = await $fetch<Route | null>(`/api/get-doc?path=${btoa(docPath)}`);

  if (!res) {
    navigateTo('/404');
    return;
  }

  pageType.value = res.body.kind;
  title.value = res.title;
  outline.value = res.outline;
  description.value = res.description;

  switch (res.body.kind) {
    case PageType.HTML: {
      htmlBody.value = res.body.content;
      break;
    }

    default: {
      object.value = res.body.content;
      break;
    }
  }
}

fetchDocumentation();
</script>