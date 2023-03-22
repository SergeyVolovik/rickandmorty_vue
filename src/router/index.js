import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/characters'
  },
  {
    path: '/characters',
    name: 'Characters Page',
    component: async () => (await import('@/views')).CharactersPage
  },
  {
    path: '/characters/:id',
    name: 'Character Detail Page',
    component: async () => (await import('@/views')).CharacterDetailPage
  },
  {
    path: '/favorites',
    name: 'Favorite Characters Page',
    component: async () => (await import('@/views')).FavoriteCharactersPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found Page',
    component: async () => (await import('@/views')).NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 };
  },
  routes
});

export default router;
