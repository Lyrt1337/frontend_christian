<template>
    <div>
      <!-- Page {{ route.params.test_page }} -->
    </div>
    <header-example></header-example>
    <div><h1>Login Page</h1></div>
    <body>


    <main>
      <div class="login_form">

        <form action="/action_page.php" method="post">
          <div class="container_benutzerbild">
            <img src="img/login_gray.png" width="250px" height="250px">
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
            <button type="button" class="cancelbtn">Abbrechen</button>
            <span class="psw"><a href="#">Password vergessen?</a></span>
          </div>
        </form>
      </div>
    </main>

    <footer>
      Student Homes<br>
      <a href="mailto:christian.gilomen@stud.fhgr.ch" style="color:white">info@student.homes.fhgr.ch</a><br>
      Tel. +41 81 123 45 67
    </footer>

    <script type="module" src="supabase.js"></script>
    <script type="module" src="scriptLogin.js"></script>

  </body>
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
  </style>