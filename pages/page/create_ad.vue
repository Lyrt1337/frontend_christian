<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <h1>Inserat Erstellen</h1>
      <form @submit.prevent="createAd">
        <div>
          <label for="title">Titel:</label>
          <input type="text" v-model="title" id="title" required>
        </div>
        <div>
          <label for="description">Beschreibung:</label>
          <textarea v-model="description" id="description" required></textarea>
        </div>
        <div>
          <label for="price">Preis:</label>
          <input type="number" v-model="price" id="price" required>
        </div>
        <div>
          <label for="adress">Adresse:</label>
          <input type="text" v-model="location" id="adress" required>
        </div>
        <div>
          <label for="city">Stadt:</label>
          <input type="text" v-model="location" id="city" required>
        </div>
        <button type="submit">Inserat erstellen</button>
      </form>
      <Footer></Footer>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue';
  import { useWebsiteStore } from '~/stores/website.js';
  
  const title = ref('');
  const description = ref('');
  const price = ref('');
  const adress = ref('');
  const city = ref('');

  const store = useWebsiteStore();
  
  const createAd = async () => {
    const { data, error } = await supabase
      .from('ads')
      .insert([
        { title: title.value, description: description.value, price: price.value, adress: adress.value, city: city.value }
      ]);
  
    if (error) {
      alert('Fehler beim Erstellen des Inserats: ' + error.message);
    } else {
      alert('Inserat erfolgreich erstellt!');
    }
  };
  </script>