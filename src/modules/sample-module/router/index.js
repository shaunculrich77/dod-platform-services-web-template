import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/SampleHome',
        name: 'SampleHome',
        component: () =>
            import('@/modules/sample-module/pages/index/index.vue'),
    },
    {
        path: '/SampleAbout',
        name: 'SampleAbout',
        //lazy loaded component
        component: () =>
            import(
                '@/modules/external-integrations-template/pages/about/about.vue'
            ),
    },
];

export default routes;
