import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home'
import Test from '../views/test'
import Avatar from '../views/avatar'
import User from '../views/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      auth: false,
      tabbar:true,
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '文字',
      auth: false,
      tabbar:true,
    }
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar,
    meta: {
      title: '图片',
      auth: false,
      tabbar:true,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: '我的',
      auth: false,
      tabbar:true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
