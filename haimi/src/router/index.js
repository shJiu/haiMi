import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/page/main'
import home from '@/components/page/home'
import book from '@/components/page/book'
import user from '@/components/page/user'
import detaile from '@/components/page/detaile'
Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
  	{
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/detaile',
      name: 'detaile',
      component: detaile
    }
  ]
})
