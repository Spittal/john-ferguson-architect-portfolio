import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./HomeRoute.vue'),
    },
    {
      name: 'work-index',
      path: '/work',
      component: () => import('./work/WorkIndexRoute.vue'),
    },
    {
      name: 'work-item',
      path: '/work/:workSlug',
      props: true,
      component: () => import('./work/WorkItemRoute.vue'),
    },
    {
      name: 'information',
      path: '/information',
      component: () => import('./information/InformationRoute.vue'),
    }
  ]
})
