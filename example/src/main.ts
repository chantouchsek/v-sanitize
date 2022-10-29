import { createApp } from 'vue'
import VSanitize from '../../src/sanitize'
import App from '@/App.vue'

const app = createApp(App).use(VSanitize)

app.mount('#app')
