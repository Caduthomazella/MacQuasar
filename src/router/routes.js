
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/Index.vue') },
      { path: '/mcdelivery', component: () => import('pages/mcdelivery/Index.vue') },
      { path: '/myorders', component: () => import('pages/myorders/Index.vue') },
      { path: '/cupons', component: () => import('pages/cupons/Index.vue') },
      { path: '/mycupons', component: () => import('pages/mycupons/Index.vue') }
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
