import Vue from 'vue';
import VueRouter from 'vue-router';
import externalIntegrationsTemplateRouter from './modules/external-integrations-template/router';
import sampleModuleRouter from './modules/sample-module/router';

Vue.use(VueRouter);

var routes = [];
routes = routes.concat(externalIntegrationsTemplateRouter);
routes = routes.concat(sampleModuleRouter);

const baseRouter = new VueRouter({
    routes,
});

export default baseRouter;
