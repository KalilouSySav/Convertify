<template>
  <div>
    <h2 class="mb-4"><i class="bi bi-clock"></i> Historique des conversions</h2>
    <ul class="list-group" style="overflow-y: auto; max-height: 410px; ">
      <li v-for="result in results" :key="result.id" class="list-group-item">
        <div style="padding-right: 5%; padding-left: 5%;">
        <span class="fw-bold">{{ result.value }} {{ result.from }}</span> 
        est égal à 
        <span class="fw-bold">{{ result.result }} {{ result.to }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

  
  <script>
  import store from '@/store.js';

  export default {
    name: 'Historique_component',


  computed: {
    results() {
    return store.state.results;
  }
  },
   
  };
  </script>

  