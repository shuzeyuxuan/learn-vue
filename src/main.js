import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './directives/index.js';
import './components/index';
import store from './store/index';
import VueSweetalert2 from './plugins/vue-sweetalert2';

// 使用插件
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
