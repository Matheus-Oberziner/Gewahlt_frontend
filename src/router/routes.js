import AuthLayout from 'src/layouts/AuthLayout.vue'
import MainLayout from 'src/layouts/MainLayout.vue'

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
    path: '/home',
    component: MainLayout,
    children: [
      { path: '', component: () => import('src/pages/HomePage.vue') }
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
