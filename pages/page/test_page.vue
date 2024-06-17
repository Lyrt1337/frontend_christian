<template>
    <div id="route-id">
      Page {{ route.params.id }}
    </div>
  </template>
  
  <script setup lang="js">
  
  const route = useRoute()
  
  
  </script>
  
  <style scoped lang="css">
  #route-id {
    padding: 8px;
    font-size: 20px;
    font-weight: bold;
  }
  </style>