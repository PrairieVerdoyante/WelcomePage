<script setup>
import ButtonsSliderComponent from './components/ButtonsSliderComponent.vue';
import { chooseWelcome } from './utils/mainpage.js';


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
            <h1>{{chooseWelcome()}}</h1>
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
          <ButtonsSliderComponent />
        </div>
        <!---
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
      -->

    </div>
</body>
</template>

<style scoped>
@import './assets/base.css';
@import './assets/main.css';

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
