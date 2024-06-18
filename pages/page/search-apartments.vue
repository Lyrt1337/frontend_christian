<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <h1>Wohnung Suchen</h1>
      <div v-if="ads.length === 0">Keine Inserate gefunden</div>
      <div v-else>
        <ul>
          <li v-for="Apartment in Apartments" :key="Apartments.id">
            <h2>{{ Apartment.title }}</h2>
            <p>{{ Apartment.description }}</p>
            <p>Preis: {{ Apartment.price }}CHF</p>
            <p>Adresse: {{ Apartment.adress }}</p>
            <p>Stadt: {{ Apartment.city }}</p>
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