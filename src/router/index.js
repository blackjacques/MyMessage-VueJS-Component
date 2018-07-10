import Vue from 'vue'
import Router from 'vue-router'
import MyMessage from '@/components/Msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyMessage',
      component: MyMessage
    }
  ]
})
