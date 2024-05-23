<template>
  <UCard id="header-container">
    <template #header>
      <div id="header-inner-container">
        <h1>Welcome to FHGR Frontend Development Lectures</h1>
        <ColorScheme>
          <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
        </ColorScheme>
      </div>
    </template>
    <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation
    </UButton>
  </UCard>
</template>

<script setup lang="js">

</script>

<style scoped lang="css">
#header-container {
  margin-top: 32px;
}

#header-inner-container {
  justify-content: space-between;
  display: flex;
}
</style>