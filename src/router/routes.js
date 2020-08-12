
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: '/mcdelivery', component: () => import('pages/mcdelivery/index.vue') },
      { path: '/myorders', component: () => import('pages/myorders/index.vue') },
      { path: '/cupons', component: () => import('pages/cupons/index.vue') },
      { path: '/mycupons', component: () => import('pages/mycupons/index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
