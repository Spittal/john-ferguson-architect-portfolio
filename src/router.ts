import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
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
      path: '/work/:projectId',
      component: () => import('./work/WorkItemRoute.vue'),
    },
    {
      name: 'information',
      path: '/information',
      component: () => import('./information/InformationRoute.vue'),
    }
  ]
})
