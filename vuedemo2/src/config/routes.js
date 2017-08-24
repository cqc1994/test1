/*
 * Created by zed on 2017/4/27.
 */
// 引用模板
import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['../page/index'], resolve)
const content = resolve => require(['../page/content'], resolve)
const Frame = resolve => require(['../frame/subroute.vue'], resolve)
const userIndex = resolve => require(['../page/user/index.vue'], resolve)
const userInfo = resolve => require(['../page/user/info.vue'], resolve)
const userLove = resolve => require(['../page/user/love.vue'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/user',
      name: 'Frame',
      component: Frame,
      children: [
        {
          path: '/user/index',
          name: 'userIndex',
          component: userIndex
        },
        {
          path: '/user/info',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: '/user/love',
          name: 'userLove',
          component: userLove
        }
      ]
    }
  ]
})
