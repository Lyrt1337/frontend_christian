<template>
    <NuxtLayout name="default-layout">
        <div>
        <!-- Page {{ route.params.test_page }} -->
        </div>
        <header-example></header-example>
        <div><h1>This is the test page</h1></div>
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