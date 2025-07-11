import AuthLayout from 'src/layouts/AuthLayout.vue'
import ClienteLayout from 'src/layouts/ClienteLayout.vue'
import OperacionalLayout from 'src/layouts/OperacionalLayout.vue'

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', component: () => import('src/pages/Auth/LoginPage.vue') }
    ],
    meta: { dark: false }
  },

  {
    path: '/redefinir-senha',
    component: AuthLayout,
    children: [
      { path: '', component: () => import('src/pages/Auth/ResetPasswordPage.vue') },
      { path: 'verificar-codigo', component: () => import('src/pages/Auth/VerifyCodePage.vue') },
      { path: 'criar-nova-senha', component: () => import('src/pages/Auth/CreateNewPassword.vue') }
    ],
    meta: { dark: false }
  },

  {
    path: '/dashboard',
    component: ClienteLayout,
    children: [
      { path: '', component: () => import('src/pages/DashboardClientePage.vue') }
    ],
    meta: { dark: false }
  },

  {
    path: '/atividades',
    component: OperacionalLayout,
    children: [
      { path: '', component: () => import('src/pages/Operacional/AtividadesPage.vue') }
    ],
    meta: { dark: false }
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
