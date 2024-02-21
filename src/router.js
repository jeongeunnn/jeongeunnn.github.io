import { createWebHashHistory, createRouter } from "vue-router";

import LayerMain from './layer/LayerMain.vue';
import LayerPage from './layer/LayerPage.vue';

//introduction
import IntroMain from './pages/introduction/IntroMain.vue';
import IntroDetail from './pages/introduction/IntroDetail.vue';
//portfolio
import PortfolioMain from './pages/portfolio/PortfolioMain.vue';
import PortfolioDetail from './pages/portfolio/PortfolioDetail.vue';
//contents AnimationsArea
import AnimationMain from './pages/animation/AnimationMain.vue';
import AnimationDetail from './pages/animation/AnimationDetail.vue';




const routes = [
  {
    name: 'main',
    path: '/',
    component: LayerMain,
    meta: {
      hideSpecificElem: true,
    }
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: LayerPage,
    meta: {
      hideSpecificElem: true,
    },
    children: [
      {
        name:'All Projects',
        path: '',
        component: PortfolioMain,
        meta: {
          hideSpecificElem: true,
        }
      },
      {
        name: 'Portfolio Detail',
        path: 'detail/:id',
        component: PortfolioDetail,
        meta: {
          hideSpecificElem: true,
        }
      },
    ]
  },
  {
    name: 'Introduction',
    path: '/introduction',
    component: LayerPage,
    meta: {
      hideSpecificElem: true,
    },
    children: [
      {
        name:'About me',
        path: '',
        component: IntroMain,
        meta: {
          hideSpecificElem: true,
        }
      },
      {
        name: 'Introduction Detail',
        path: 'detail/:id',
        component: IntroDetail,
        meta: {
          hideSpecificElem: true,
        }
      },
    ]
  },
  {
    name: 'AnimationsArea',
    path: '/AnimationsArea',
    component: LayerPage,
    children: [
      {
        name:'All AnimationsArea',
        path: '',
        component: AnimationMain,
      },
      {
        name: 'AnimationsArea Detail',
        path: ':id',
        component: AnimationDetail,
        meta: {
          hideAllElems: true,
          name: 'animation'
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
    routes,
});

export default router;