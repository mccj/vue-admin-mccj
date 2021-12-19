import { createApp } from "vue";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
import App from "./App.vue";
import store from "./store";
import router from "./router";
console.log(router);

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, { locale })
  .mount("#app");

// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// import '@/style/reset.scss'
// import '@/style/common.scss'
// import './assets/font/iconfont.css'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import './permission'
// console.log(router)
// createApp(App).use(store).use(router).use(ElementPlus,{locale}).mount('#app')
