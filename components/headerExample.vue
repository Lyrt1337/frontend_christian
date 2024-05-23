<template>
  <UCard id="header-container">
    <template #header>
      <div id="header-inner-container">
        <h1>Welcome to FHGR Frontend Development Lectures</h1>
        <div class="logo">
            <a href="index.html">
                <img src="img/home_logo_green.jpg" width="150px" height="150px" alt="Student Homes">
            </a>
        </div>
        <div>
          <a href="login.html">
            <img src="img/login_gray.png" width="45px" height="45px">
          </a>
        </div>
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