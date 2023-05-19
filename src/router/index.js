import { createRouter, createWebHistory } from 'vue-router';
import ConversionForm from '@/components/ConversionForm.vue';
import About_component from '@/components/About_component.vue';
import Acceuil_component from '@/components/Acceuil_component.vue';
import Historique_component from '@/components/Historique_component.vue';


const routes = [
  {
    path: '/',
    name: 'Acceuil_component',
    component: Acceuil_component,
    props: { images: [
      { id: 1, src: "assets/img/tempH.jpeg", title: "temperature" },
      { id: 2, src:  "assets/img/lengthH.jpeg", title: "length" },
      { id: 3, src:  "assets/img/volumeH.jpeg", title: "volume"},
      { id : 4, src: "assets/img/massH.jpeg", title: "mass" },
      { id: 5, src:  "assets/img/speedH.jpeg", title: "speed"},
      { id: 6, src:  "assets/img/timeH.jpeg", title: "time"},
      { id: 7, src:  "assets/img/pressureH.jpeg", title: "pressure"},
      { id: 8, src:  "assets/img/digitalH.jpeg", title: "digital"},
      { id: 9, src:  "assets/img/energyH.jpeg", title: "energy"},
      { id: 10, src:  "assets/img/powerH.jpeg", title: "power"},
      { id: 11, src:  "assets/img/forceH.jpeg", title: "force"},
      { id: 12, src:  "assets/img/angleH.jpeg", title: "angle"},
      // { id: 8, src:  "assets/img/energyH.jpeg", title: "energy"},
      // { id: 3, src:  "assets/img/weightH.jpeg", title: "weight"},
      // { id: 4, src:  "assets/img/areaH.jpeg", title: "area"},
    ]}
  },
  
  {
    path: '/conversion/:type?',
    name: 'ConversionForm',
    component: ConversionForm,
  },
  {
    path: '/about',
    name: 'About_component',
    component: About_component
  },
  {
    path: '/image-details/:id',
    name: 'ImageDetails',
    component: ConversionForm,
    props: true,
    beforeEnter: (to, from, next) => {
      localStorage.setItem('lastSelectedType', to.params.id);
      next('/conversion/' + to.params.id);
    }
  },
  {
    path: '/historique',
    name: 'Historique_component',
    component: Historique_component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.type) {
    localStorage.setItem('lastSelectedType', to.params.type);
  } else if (!localStorage.getItem('lastSelectedType')) {
    localStorage.setItem('lastSelectedType', 'temperature');
  }
  next();
});

export default router;
