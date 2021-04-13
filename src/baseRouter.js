import Vue from 'vue';
import VueRouter from 'vue-router';
import platformServicesTemplateRouter from './modules/platform-services-template/router';
import sampleModuleRouter from './modules/sample-module/router';

Vue.use(VueRouter);

var routes = [];
routes = routes.concat(platformServicesTemplateRouter);
routes = routes.concat(sampleModuleRouter);

const baseRouter = new VueRouter({
    routes,
});

export default baseRouter;
