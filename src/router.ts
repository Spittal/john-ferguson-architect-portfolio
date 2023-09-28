import { createRouter, createWebHistory } from 'vue-router';
import { changeTitle } from './useDocumentTitle'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./HomeRoute.vue'),
      beforeEnter: () => {
        changeTitle('Home');
      }
    },
    {
      name: 'work-index',
      path: '/work',
      component: () => import('./work/WorkIndexRoute.vue'),
      beforeEnter: () => {
        changeTitle('Work');
      }
    },
    {
      name: 'work-item',
      path: '/work/:workSlug',
      props: true,
      component: () => import('./work/WorkItemRoute.vue'),
      // This changes document title in the WorkItemRoute file
    },
    {
      name: 'information',
      path: '/information',
      component: () => import('./information/InformationRoute.vue'),
      beforeEnter: () => {
        changeTitle('Information');
      }
    }
  ]
})
