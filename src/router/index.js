import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/modules/external-integrations-template/pages/index/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        //lazy loaded component
        component: () =>
            import(
                '@/modules/external-integrations-template/pages/about/about.vue'
            ),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
