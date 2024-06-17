<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <h1>Wohnung Suchen</h1>
      <div v-if="ads.length === 0">Keine Inserate gefunden</div>
      <div v-else>
        <ul>
          <li v-for="ad in ads" :key="ad.id">
            <h2>{{ ad.title }}</h2>
            <p>{{ ad.description }}</p>
            <p>Preis: {{ ad.price }}€</p>
            <p>Ort: {{ ad.location }}</p>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useSupabaseClient } from '@supabase/supabase-js';
  
  const ads = ref([]);
  const supabase = useSupabaseClient();
  
  const fetchAds = async () => {
    const { data, error } = await supabase
      .from('ads')
      .select('*');
  
    if (error) {
      alert('Fehler beim Laden der Inserate: ' + error.message);
    } else {
      ads.value = data;
    }
  };
  
  onMounted(fetchAds);
  </script>
  