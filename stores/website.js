import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useSupabaseClient } from '@supabase/supabase-js';

export const useWebsiteStore = defineStore('websiteStore', () => {
  const tableData = ref([]);
  const ads = ref([]);

  async function fetchData() {
    const client = useSupabaseClient();
    const { data, error } = await client.from('data')
      .select('*')
      .limit(100);
    if (data) {
      tableData.value = data;
    } else {
      console.error('Error when fetching the data:', error);
    }
  }

  async function fetchAds() {
    const client = useSupabaseClient();
    const { data, error } = await client.from('Apartments')
      .select('*');
    if (data) {
      ads.value = data;
    } else {
      console.error('Error when fetching the ads:', error);
    }
  }

  async function createAd(title, description, price, adress, city) {
    const client = useSupabaseClient();
    const { data, error } = await client.from('Apartments')
      .insert([
        { title, description, price, adress, city }
      ]);
    if (error) {
      console.error('Error when creating the ad:', error);
    } else {
      fetchAds(); // Refresh the ads list after creating a new ad
    }
  }

  return { tableData, fetchData, ads, fetchAds, createAd };
});
