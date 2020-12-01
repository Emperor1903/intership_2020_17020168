import Vue from 'vue'
import Router from 'vue-router'
import datatable from '@/components/datatable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'datatable',
      component: datatable
    }
  ]
})
