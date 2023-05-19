<template>
  <header class="bg-primary py-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <i class="bi bi-emoji-smile text-white fs-1"></i>
          <h1 class="text-white">{{ title }}</h1>
        </div>
        <div class="col-md-6">
          <nav class="d-flex justify-content-end">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="/">Accueil</a>
              </li>
              <li class="nav-item" @click="updateLastSelectedType">
                <a class="nav-link text-white" :href="'/conversion/'+lastSelectedType">Conversion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/about">A propos</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

  
  <script>
  export default {
    name: 'Header_component',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        lastSelectedType: localStorage.getItem('lastSelectedType'),
      }
    },
    methods: {
      updateLastSelectedType() {
        this.lastSelectedType = localStorage.getItem('lastSelectedType');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez ici les styles CSS spécifiques à Header */
  </style>
  