import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { useSupabaseClient } from '@supabase/supabase-js';

export const useWebsiteStore = defineStore('websiteStore', () => {
  const tableData = ref([]);
  const apartments = ref([]);
  const user = useSupabaseUser();

  async function fetchData() {
    const client = useSupabaseClient();
    const { data, error } = await client.from('Apartments')
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
      apartments.value = data;
    } else {
      console.error('Error when fetching the Apartments:', error);
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

  async function signIn(email, password) {
    const { error } = await client.auth.signIn({ email, password })
    if (error) {
      console.error('Error signing in:', error)
    }
  }

  async function signOut() {
    const { error } = await client.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
  }

  return { tableData, apartments, fetchData, fetchAds, createAd, signIn, signOut};
});
