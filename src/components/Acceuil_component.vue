<template>
    <div class="container-fluid py-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div v-for="(image, index) in images" :key="index" class="col">
          <router-link :to="{ name: 'ImageDetails', params: { id: image.title } }" class="card h-100">
            <img :src="require(`@/${image.src}`)" class="card-img-top" :alt="image.title" />
            <div class="card-body">
              <h5 class="card-title">{{ image.title }}</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "ImageGrid",
    props: {
      images: Array,
    },
  };
  </script>
  
  <style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  
  .image-title {
    text-align: center;
  }
  </style>
  