import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppNotFound from './pages/AppNotFound.vue';
import SingleProjectViewApp from './pages/SingleProjectViewApp.vue';
import AppContactUs from './pages/AppContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: SingleProjectViewApp
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound,
        }
    ]
});
export { router }