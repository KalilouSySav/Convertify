<template>
  <div id="app">
    <Header_component title="Convertify" />
    <!-- <Acceuil_component :images="images"/> -->
    <!-- <ConversionForm /> -->
    <router-view/>
    <Footer_component />
  </div>
</template>

<script>
// import ConversionForm from './components/ConversionForm.vue'
import Header_component from './components/Header_component.vue'
import Footer_component from './components/Footer_component.vue'
// import Acceuil_component from './components/Acceuil_component.vue'

export default {
  name: 'App',
  components: {
    //  ConversionForm,
      Header_component, Footer_component, 
      // Acceuil_component
  },
  data() {
    return {
      images: [
        { id: 1, src: "assets/img/tempH.jpeg", title: "Temperature" },
        { id: 2, src:  "assets/img/lengthH.jpeg", title: "Length" },
       // { id: 3, src:  "assets/img/logo-vue.jpeg", title: "Image 3" },
        //{ id: 4, src:  "assets/img/logo-vue.jpeg", title: "Image 4" },
        //{ id: 5, src:  "assets/img/logo-vue.jpeg", title: "Image 5" }
      ]
    };
  },
  methods: {
      addResult(result) {
        this.results.push(result);
      }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
