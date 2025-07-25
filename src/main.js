// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // path to your router file

const app = createApp(App);

app.use(router);
app.mount('#app');
