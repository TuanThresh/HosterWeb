import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DomainNameView from '@/views/DomainNameView.vue'
import HostingNameView from '@/views/HostingNameView.vue'
import VPSNameView from '@/views/VPSNameView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { useAuthStore } from '@/stores/authStore'
import ProfileView from '@/views/ProfileView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
        auth: true
      }
    },
    {
      path: '/ten-mien',
      name: 'DomainName',
      component: DomainNameView,
      meta : {
        auth: true
      }
    },
    {
      path: '/hosting',
      name: 'HostingName',
      component: HostingNameView,
      meta : {
        auth: true
      }
    },
    {
      path: '/vps',
      name: 'VpsName',
      component: VPSNameView,
      meta : {
        auth: true
      }
    },
    {
      path: '/dang-nhap',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/dang-ky',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/ho-so',
      name: 'Profile',
      component: ProfileView,
      meta : {
        auth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})
router.beforeEach((to, from,next) => {
  if(to.meta.auth == true && !useAuthStore().isLogin){
    next('/login');
  }
  else if(!to.meta.auth && useAuthStore().isLogin){
    next('/');
  }
  else next();
})
export default router
