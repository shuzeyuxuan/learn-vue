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
    let articleId = to.params.articleId;

    app.$message.hide();

    if (
        (auth && to.path.indexOf('/auth/') !== -1) ||
        (!auth && to.meta.auth) ||
        (articleId && !store.getters.getArticleById(articleId))
    ) {
        next('/');
    } else {
        next();
    }
})

router.afterEach((to) => {
    let app = router.app;
    // let store = app.$options.store;
    let showMsg = to.params.showMsg;

    if (showMsg) {
        if (typeof showMsg === 'string') {
            app.$message.show(showMsg);
        } else {
            app.$message.show('操作成功');
        }
    }
})

export default router;