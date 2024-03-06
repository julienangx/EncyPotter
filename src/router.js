import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./views/HomePage.vue'),
    },
    {
        path: '/livres',
        component: () => import('./views/BooksPage.vue'),
    },
    {
        path: '/personnages',
        component: () => import('./views/CharactersPage.vue'),
    },
    {
        path: '/potions',
        component: () => import('./views/PotionsPage.vue'),
    },
    {
        path: '/sorts',
        component: () => import('./views/SpellsPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp();
app.use(router);

export default router;
