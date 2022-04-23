import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from '@telekom/scale-components-neutral/loader';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';

defineCustomElements();

const app = createApp(App).mount('#app')

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('scale-');
