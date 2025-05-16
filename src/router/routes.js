import AuthLayout from 'src/layouts/AuthLayout.vue'

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    name: 'login',
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    beforeEnter: (to, from, next) => {
      // Se for diretório raiz direciona para página de login
      if (to.path === '/') {
        next('/login')
      } else {
        next()
      }
    }
  }
]

export default routes
