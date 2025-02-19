<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

// Définition des couleurs avec 50% d'opacité
const colors = [
  //'rgba(107, 86, 77, 0.5)',  // darkbrown
  'rgba(174, 125, 99, 0.5)', // lightbrown
  'rgba(225, 198, 191, 0.5)', // lightbeige
  //'rgba(234, 219, 226, 0.5)', // lightpink
  'rgba(237, 185, 143, 0.5)', // beige
  'rgba(187, 122, 87, 0.5)'  // brightcolor
];

// Fonction pour obtenir une couleur aléatoire
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Liste des boutons avec une couleur aléatoire
const buttons = ref([
  { label: "Menus de la cantine", link: "https://intranet.he-arc.ch/dg/Pages/Vie-de-l-ecole-Menus.aspx", color: getRandomColor() },
  { label: "is-academia", link: "https://age.hes-so.ch/imoniteur_AGEP/!logins.htm?ww_x_urlAppelant=gestac.htm", color: getRandomColor() },
  { label: "Brands for students", link: "https://brandsforstudents.ch/fr", color: getRandomColor() },
  { label: "Math", link: "https://cyberlearn.hes-so.ch/mod/folder/view.php?id=1965144", color: getRandomColor() },
  { label: "Physique", link: "https://cyberlearn.hes-so.ch/course/view.php?id=12462", color: getRandomColor() },
  { label: "Linux embarqué", link: "https://cyberlearn.hes-so.ch/course/view.php?id=7678", color: getRandomColor() },
  { label: "IOT", link: "https://cyberlearn.hes-so.ch/course/view.php?id=19504", color: getRandomColor() },
  { label: "Design patterns", link: "https://cyberlearn.hes-so.ch/course/view.php?id=11022", color: getRandomColor() },
  { label: ".NET", link: "https://gitlab-etu.ing.he-arc.ch/isc/2024-25/niveau-2/2255.3-dot-net/cours-net", color: getRandomColor() }
]);



</script>

<template>
  <!---
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
-->
  <body>
    <div class="page">
        <div id="titre">
            <h1>Bienvenue</h1>
        </div>
        <div id="conteneur">
            <form action="https://www.google.com/search" class="searchform" method="get" name="searchform"
                target="_blank">
                <input name="sitesearch" type="hidden" value="">
                <input autocomplete="on" class="form-control search" name="q"
                    placeholder="Quel est l'ancêtre du koala ?" required="required" type="text">
                <button class="formButton" type="submit">Rechercher</button>
            </form>
        </div>
        <div id="Ecole" class="conteneur">
            <div v-for="(button, index) in buttons" :key="index">
                <a :href="button.link">
                    <button class="fill" :style="{ backgroundColor: button.color }">
                        {{ button.label }}
                    </button>
                </a>
            </div>
        </div>
        <div id="Cinema" class="conteneur">
            <button class="dropdown-btn">🎥</button>
            <div class="dropdown-content">
                <a href="https://www.cinemont.ch/fr/delemont.html">
                    <button class="fill">Cinemont</button>
                </a>
                <a href="https://www.cinemalux.ch/">
                    <button class="fill">Breuleux</button>
                </a>
                <a href="https://cinematographe.ch/">
                    <button class="fill">Tramelan</button>
                </a>
                <a href="https://www.cinelucarne.ch/">
                    <button class="fill">Noirmont</button>
                </a>
            </div>
        </div>
    </div>
</body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

}
</style>
