import Vue from 'vue'
import Router from 'vue-router'
import ArticleManage from '@/components/ArticleManage'
import ArticlePublish from '@/components/ArticlePublish'
import RouterDemoOne from '@/components/RouterDemoOne'
import Demo from '@/components/Demo'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ArticleManage
    },
    {
      path: '/ArticleManage',
      name: 'ArticleManage',
      component: ArticleManage
    },
    {
      path: '/ArticlePublish',
      name: 'ArticlePublish',
      component: ArticlePublish
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/RouterDemoOne/:userName',
      name: 'RouterDemoOne',
      component: RouterDemoOne
    }
  ]
})
