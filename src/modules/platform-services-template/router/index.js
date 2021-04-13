import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(
                '@/modules/platform-services-template/pages/index/index.vue'
            ),
    },
    {
        path: '/about',
        name: 'About',
        //lazy loaded component
        component: () =>
            import(
                '@/modules/platform-services-template/pages/about/about.vue'
            ),
    },
];

export default routes;
