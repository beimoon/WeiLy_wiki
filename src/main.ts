import type { App } from 'vue'
import { createApp } from 'vue'
import appView from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import { setupRouter } from './router'
import pinia from '@/store/index'

import '@/assets/styles/common.less'

async function bootstrap(app: App): Promise<App> {
  setupRouter(app)
  return app
}

const app = createApp(appView)
app.use(pinia)

bootstrap(app).then(res => res.mount('#app'))
