<template>
    <!-- <UCard id="nav-container"> -->
      <!-- <template #navbar> -->
        <!-- <div id="nav-inner-container"> -->
          <!-- <h1>Welcome to FHGR Frontend Development Lectures</h1> -->
        

        <nav>
            <ul class="nav_links">
                <li><NuxtLink to="/">Übersicht</NuxtLink></li>
                <li><NuxtLink to="/page/search-apartments">Wohnung Suchen</NuxtLink></li>
                <li><NuxtLink to="/page/create_ad">Inserat Erstellen</NuxtLink></li>
                <li><NuxtLink to="/page/Info">Info</NuxtLink></li>
                <li><NuxtLink to="/page/Kontakt">Kontakt</NuxtLink></li>
            </ul>
        </nav>
      
        <!-- </div> -->
      <!-- </template> -->

    <!-- </UCard> -->
</template>
  
  <script setup lang="js">
  
  </script>
  
  <style scoped lang="css">
  /* #nav-container {
    margin-top: 32px;
    } */
    
    #nav {
        justify-content: right;
        display: flex;
    }


    .nav_links{
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style:none;
        padding: 0;
        margin:0px;
    }

    .nav_links li a{
        display: block;
        box-sizing:border-box;
        height:40px;
        padding: 10px 15px 0px 15px;
    }


    .nav_links li a:hover{
        color:blue;
        border-bottom-style: solid;
        border-bottom-width: 5px;
        border-bottom-color: blue;
    }
  </style>