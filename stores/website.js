import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { useSupabaseClient } from '@supabase/supabase-js';

document.addEventListener('DOMContentLoaded', (event) => {
  // Event listeners for the buttons
  document.getElementById('loginButton').addEventListener('click', login);
  document.getElementById('signupButton').addEventListener('click', signUp);
});

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

//   async function signIn(email, password) {
//     const { error } = await client.auth.signIn({ email, password })
//     if (error) {
//       console.error('Error signing in:', error)
//     }
//   }

//   async function signUp() {
//     const { error } = await client.auth.signUp()
//     if (error) {
//       console.error('Error signing out:', error)
//     }
//   }

// Function to login using email and password
async function login() {
  const email = document.getElementById('uname').value;
  const password = document.getElementById('psw').value;

  const { error } = await client.auth.signIn({ email, password });

  const userStatusElement = document.getElementById('resultLogin');

  if (error) {
      console.error("Error during login: ", error.message);
      userStatusElement.innerHTML = `Fehler beim Anmelden: ${error.message}`;
  } else {
      console.log("Logged in as ", email);
      userStatusElement.innerHTML = `Sie sind nun angemelded als: ${supa.auth.user().email}. <a href="index.html">Zurück zur Startseite</a>`;
  }
}

// Function to sign up using email and password
async function signUp() {
  const email = document.getElementById('uname').value;
  const password = document.getElementById('psw').value;

  const { error } = await client.auth.signUp();

  const userStatusElement = document.getElementById('resultLogin');

  if (error) {
      console.error("Error during sign up: ", error.message);
      userStatusElement.innerHTML = `Fehler beim Registrieren: ${error.message}`;
  } else {
      console.log("Signed up as ", email);
      userStatusElement.innerHTML = `Bitte bestätigen sie ihre E-Mail Adresse.`;
  }
}


  return { tableData, apartments, fetchData, fetchAds, createAd, login, signUp};
});



