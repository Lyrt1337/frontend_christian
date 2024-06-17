<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="layout">
    <!-- Komponente benötigt kein import in script. Wird automatisch von nuxt importiert -->
    <header-example></header-example>
    <div class="global-css">
      <div><NuxtLink to="/page/test_page">Test Page</NuxtLink></div>
      <div><NuxtLink to="/page/2">Page 2</NuxtLink></div>
    </div>
    <UCard id="data-table-container">
      <UTable id="data-table" :rows="store.tableData"/>
    </UCard>
  </NuxtLayout>
</template>

<script setup lang="js">
import {useWebsiteStore} from "~/stores/website.js";

const store = useWebsiteStore()

await callOnce(store.fetchData)

</script>

<style lang="css" scoped>

#data-table-container {
  margin-top: 32px;
}

#data-table {
  max-height: 500px;
}
</style>