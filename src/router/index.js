import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes
});

router.beforeEach((to, from, next) => {
    let app = router.app;
    let store = app.$options.store;
    let auth = store.state.auth;

    app.$message.hide();

    if ((auth && to.path.indexOf('/auth/') !== -1) || (!auth && to.meta.auth)) {
        next('/');
    } else {
        next();
    }
})

export default router;