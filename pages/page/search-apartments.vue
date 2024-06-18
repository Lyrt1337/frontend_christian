<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <h1>Wohnung Suchen</h1>
      <div v-if="store.apartments.length === 0">Keine Inserate gefunden</div>
      <div v-else>
        <ul>
          <li v-for="apartment in store.apartments" :key="apartments.id">
            <h2>{{ apartment.title }}</h2>
            <p>{{ apartment.description }}</p>
            <p>Preis: {{ apartment.price }}CHF</p>
            <p>Adresse: {{ apartment.adress }}</p>
            <p>Stadt: {{ apartment.city }}</p>
          </li>
        </ul>
      </div>

      <UCard id="data-table-container">
      <UTable id="data-table" :rows="store.tableData"/>
      </UCard>

      <Footer></Footer>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useWebsiteStore } from '~/stores/website.js';
  
  const store = useWebsiteStore();
  
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