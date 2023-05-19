<template>
  <footer class="bg-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p>&copy; {{ currentYear }} Convertify - Tous droits réservés.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="/">Accueil</a></li>
            <li class="list-inline-item" @click="updateLastSelectedType"><a :href="'/conversion/'+lastSelectedType">Conversion</a></li>
            <li class="list-inline-item"><a href="/about">A propos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

  
  <script>
  export default {
    name: 'Footer_component',
    data () {
      return {
        currentYear: new Date().getFullYear(),
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
  /* Ajoutez ici les styles CSS spécifiques à Footer */
  </style>
  