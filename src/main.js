import Vue from 'vue';
import App from './App.vue';
import baseRouter from './baseRouter';
import store from './modules/external-integrations-template/store';

Vue.config.productionTip = false;

new Vue({
    router: baseRouter,
    store,
    render: (h) => h(App),
}).$mount('#app');
