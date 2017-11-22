import Vue from 'vue'
import Router from 'vue-router'
import ArticleManage from '@/components/ArticleManage'
import ArticlePublish from '@/components/ArticlePublish'

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
    }
  ]
})
