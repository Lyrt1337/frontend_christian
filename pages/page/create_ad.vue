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
          <label for="location">Ort:</label>
          <input type="text" v-model="location" id="location" required>
        </div>
        <button type="submit">Inserat erstellen</button>
      </form>
      <Footer></Footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useSupabaseClient } from '@supabase/supabase-js';
  
  const title = ref('');
  const description = ref('');
  const price = ref('');
  const location = ref('');
  const supabase = useSupabaseClient();
  
  const createAd = async () => {
    const { data, error } = await supabase
      .from('ads')
      .insert([
        { title: title.value, description: description.value, price: price.value, location: location.value }
      ]);
  
    if (error) {
      alert('Fehler beim Erstellen des Inserats: ' + error.message);
    } else {
      alert('Inserat erfolgreich erstellt!');
    }
  };
  </script>