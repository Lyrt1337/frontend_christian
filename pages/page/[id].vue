<template>
  <NuxtLayout name="default-layout">
    <div id="route-id">
      <!-- Page {{ route.params.id }} -->
    </div>
    <header-example></header-example>
    <div>Page {{ route.params.id }}</div>
  </NuxtLayout>
</template>

<script setup lang="js">

const route = useRoute()

// Wir können den head auch dynamisch anpassen für eine Seite
useHead({
  title: 'My Page',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ],
  bodyAttrs: {
    class: 'test'
  },
})

</script>

<style scoped lang="css">
#route-id {
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
}
</style>