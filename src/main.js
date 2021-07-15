import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { Button,NavBar,Icon,Image as VanImage  } from 'vant';
const app = createApp(App)
const components = [
  Button,
  NavBar,
  Icon,
  VanImage 
]
components.forEach(component => {
  app.component(component.name, component)
})
import Element  from './components'
app.use(Element)
app.use(store).use(router).mount('#app')
