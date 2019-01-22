import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      // route level code-splitting
      // this generates a separate chunk (toolbar.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "toolbar" */ './views/Toolbar.vue')
    },
    {
      path: '/auto',
      name: 'autoComplete',
      component: () => import(/* webpackChunkName: "autoComplete" */ './views/AutoComplete.vue')
    },
    {
      path: '/set',
      name: 'setComplete',
      component: () => import(/* webpackChunkName: "setComplete" */ './views/SetComplete.vue')
    },
    {
      path: '/split',
      name: 'split',
      component: () => import(/* webpackChunkName: "split" */ './views/SplitEditor.vue')
    },
    {
      path: '/static_highlight',
      name: 'static_highlight',
      component: () => import(/* webpackChunkName: "static_highlight" */ './views/StaticHighlight.vue')
    }
  ]
})
