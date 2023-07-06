// import './assets/main.css'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import ElementPlus from 'element-plus'
// import App from './App.vue'
import App2 from './App2.vue'

import ElpMessage from '@/components/elp/message.js'

const app = createApp(App2)
app.config.globalProperties.a = () => {
    console.log(app)
}
app.config.globalProperties.$$message = ElpMessage
app.use(ElementPlus)
app.mount('#app')
