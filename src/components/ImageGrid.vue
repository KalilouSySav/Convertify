<template>
    <div>
      <ImageGrid :images="images" />
    </div>
  </template>
  
  <script>
  import ImageGrid from "@/components/ImageGrid.vue";
  
  export default {
    components: {
      ImageGrid,
    },
    data() {
      return {
        images: [
          {
            id: 1,
            src: "chemin/vers/image1.jpg",
            title: "Première image",
          },
          {
            id: 2,
            src: "chemin/vers/image2.jpg",
            title: "Deuxième image",
          },
          {
            id: 3,
            src: "chemin/vers/image3.jpg",
            title: "Troisième image",
          },
        ],
      };
    },
  };
  </script>
  