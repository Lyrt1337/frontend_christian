<template>
  <NuxtLayout name="default-layout">
    <div>
      <!-- Page {{ route.params.test_page }} -->
    </div>
    <Header></Header>
    <body>
      <main>

      <UCard id="login_form">
        
        <form action="/action_page.php" method="post">
          <div class="container_benutzerbild">
            <img src="assets\img\login_gray.png" width="250px" height="250px">
          </div>

          <div class="container">
            <label for="uname">Username</label>
            <input type="text" placeholder="Bitte Username eingeben" name="uname" id="uname" required>

            <label for="psw">Password</label>
            <input type="password" placeholder="Bitte Password eingeben" name="psw" id="psw" required>

            <button type="button" id="loginButton">Anmelden</button>

            <button type="button" id="signupButton">Registrieren</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Angemeldet bleiben
            </label>
          </div>

          <div id="resultLogin" style="padding:20px;color:black"></div>

          <div class="container" style="background-color:#f1f1f1">
            <span class="psw"><a href="#">Password vergessen?</a></span>
          </div>
        </form>

      </UCard>
    </main>

    <Footer></Footer>

    <script type="module" src="supabase.js"></script>
    <script type="module" src="scriptLogin.js"></script>

    </body>
  </NuxtLayout>
</template>
  
  <script setup lang="js">
  
  const route = useRoute()
  
  // Wir können den head auch dynamisch anpassen für eine Seite
  useHead({
    title: 'My Page',
    meta: [
      {name: 'description', content: 'My amazing site.'}
    ],
    bodyAttrs: {
      class: 'test'
    },
  })
  
  </script>
  
  <style scoped lang="css">
  #route-id {
    padding: 8px;
    font-size: 20px;
    font-weight: bold;
  }


#login_form form {
  border: 3px solid #f1f1f1;
  display: flex;
  flex-direction: column; /* Elemente untereinander anordnen */
  align-items: center; /* Horizontal zentrieren */
  justify-content: center; /* Optional: Vertikal zentrieren */
  height: 100%;
  width: 100%;
}

#login_form input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;

  border-width:0px 0px 1px 0px;
  border-style:solid;
  border-color: green;

  box-sizing: border-box;
}

#login_form input:focus{
    outline: none;/*Damit kein orangener Rahmen angezeigt wird beim anclicken*/
}

#login_form button {
  background-color: green;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;

  border-radius:3px;
}

/*for both buttons in form*/
#login_form button:hover {
  opacity: 0.8;
}

/* #login_form .cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
} */

#login_form .container_benutzerbild {
  text-align: center;/*https://www.freecodecamp.org/news/how-to-center-an-image-in-css/*/
  margin: 0 0 -50px 0; /*0 is short form of "0 every_unit"*/
}

#login_form .container {
  padding: 16px;

}

#login_form span.psw {/*Passwort fergessen? Text*/
  float: right;
  padding-top: 16px;
}


form label{
  color:green;
  font-weight: bold;
}
  </style>