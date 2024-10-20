<template>
  <article ref="arti">
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
    <div class="page-notfound" v-else-if="pageType === PageType.NotFound">
      <NotFound/>
    </div>
  </article>
</template>

<script lang="ts" setup>
import {
  type Category,
  type Func,
  type Group,
  type Nullable,
  PageType,
  type Symbols,
  type Type
} from "@/static/types";
import withoutEndingSlash from "~/utils/withoutEndingSlash";
import useOutline from "~/composables/useOutline";
import NotFound from "~/components/not-found.vue";
import getDoc from "~/utils/getDoc";

const docPath = `/docs${withoutEndingSlash(useRoute().params.docPath as string)}`;

const pageType = ref<PageType>(PageType.Unknown);
const title = ref('');
const description = ref('');
const outline = useOutline();

const arti = ref<HTMLDivElement | null>(null);

const htmlBody = ref('');
const object = ref<Nullable<Func | Category | Type | Group | Symbols>>(null);

function fetchDocumentation() {
  const res = getDoc(docPath);

  if (!res) {
    pageType.value = PageType.NotFound;
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

function wrapOriginalContents() {
  if (document) {

    document.querySelectorAll('p + original, .previewed-code + original, .info-box + original, ol + original, ul + original').forEach(e => {
      const previous = e.previousElementSibling;
      if (!previous) return;
      const div = document.createElement('div');
      div.classList.add('with-original');
      div.appendChild(previous.cloneNode(true));
      const newE = e.cloneNode(true) as HTMLDivElement;
      newE.innerText = newE.innerText.trim();
      newE.innerHTML = '<span>原文</span>' + `<div class="content">${newE.innerHTML}</div>`;
      div.appendChild(newE);
      e.parentNode?.insertBefore(div, e);
      e.remove();
      previous.remove();
    })
  }
}

fetchDocumentation();

watch(arti, () => wrapOriginalContents());
</script>