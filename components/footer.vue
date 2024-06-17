<template>
    <UCard id="footer-container">
      <template #footer>
        <div id="footer-inner-container">
            Student Homes<br>
            <a href="mailto:christian.gilomen@stud.fhgr.ch" style="color:white">info@student.homes.fhgr.ch</a><br>
            Tel. +41 81 123 45 67
            <!-- <div><NuxtLink to="/"><img src="assets\img\home_logo_green.jpg" width="150px" height="150px" alt="Student Homes"></NuxtLink>
              
            </div>
            <div><NuxtLink to="/page/login"><img src="assets\img\login_gray.png" width="45px" height="45px"></NuxtLink>
              
            </div> -->
          <!-- <ColorScheme>
            <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
          </ColorScheme> -->
        </div>
      </template>
      <!-- <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation
      </UButton> -->
    </UCard>
  </template>
  
  <script setup lang="js">
  
  </script>
  
  <style scoped lang="css">
  #footer-container {
    margin-top: 32px;
  }
  
  #footer-inner-container {
    justify-content: space-between;
    display: flex;
  }
  </style>
