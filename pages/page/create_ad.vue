<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <h1>Inserat Erstellen</h1>

      <UCard id="create_form">
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
    </UCard>
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

<style scoped lang="css">
#route-id {
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
}


#create_form form {
border: 3px solid #f1f1f1;
display: flex;
flex-direction: column; /* Elemente untereinander anordnen */
align-items: center; /* Horizontal zentrieren */
justify-content: center; /* Optional: Vertikal zentrieren */
height: 100%;
width: 100%;
}

#create_form input[type=text], input[type=number] {
width: 100%;
padding: 12px 20px;
margin: 8px 0;

border-width:0px 0px 1px 0px;
border-style:solid;
border-color: green;

box-sizing: border-box;
}

</style>