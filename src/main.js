import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//按需加载antd vue
import antdCompArr from "./antd";

Vue.config.productionTip = false;

new Vue({
  router,
  ...antdCompArr,
  store,
  render: (h) => h(App),
}).$mount("#app");
