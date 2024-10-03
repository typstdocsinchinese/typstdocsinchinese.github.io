<template>
  123
</template>

<script lang="ts" setup>
const docPath = useRoute().params.docPath as string;

async function fetchDocumentation() {
  const res = await $fetch(`/api/get-doc?path=${btoa(docPath)}`)

  if (window) console.log(res)
}

fetchDocumentation();
</script>