<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="default-layout">
    <!-- Komponente benötigt kein import in script. Wird automatisch von nuxt importiert -->

    <Header></Header>
    <Navbar></Navbar>

    <!-- <UCard id="data-table-container">
      <UTable id="data-table" :rows="store.tableData"/>
    </UCard> -->

    <Footer></Footer>

  </NuxtLayout>
</template>

<script setup lang="js">
import {useWebsiteStore} from "~/stores/website.js";

const store = useWebsiteStore()

await callOnce(store.fetchData)

</script>


<!-- <script setup lang="ts">
const appConfig = useAppConfig()
</script> -->


<style lang="css" scoped>

#data-table-container {
  margin-top: 32px;
}

#data-table {
  max-height: 500px;
}
</style>