import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import '@/assets/styles.css';

createApp(App).use(Toast).mount('#app');
