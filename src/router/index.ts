import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DomainNameView from '@/views/DomainNameView.vue'
import DomainPriceView from '@/views/DomainPriceView.vue'
import LinuxSsdHostingView from '@/views/LinuxSsdHostingView.vue'
import LinuxHddHostingView from '@/views/LinuxHddHostingView.vue'
import WindowsSsdHostingView from '@/views/WindowsSsdHostingView.vue'
import EmailHostingView from '@/views/EmailHostingView.vue'
import EmailServerView from '@/views/EmailServerView.vue'
import ServerVpsView from '@/views/ServerVpsView.vue'
import ServerView from '@/views/ServerView.vue'
import ServerDatabaseView from '@/views/ServerDatabaseView.vue'
import ServiceListView from '@/views/ServiceListView.vue'
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
      path: '/kiem-tra-ten-mien',
      name: 'DomainPrice',
      component: DomainPriceView,
      meta : {
        auth: true
      }
    },
    {
      path: '/linux-ssd-hosting',
      name: 'LinuxSsdHosting',
      component: LinuxSsdHostingView,
      meta : {
        auth: true
      }
    },
    {
      path: '/linux-hdd-hosting',
      name: 'LinuxHddHosting',
      component: LinuxHddHostingView,
      meta : {
        auth: true
      }
    },
    {
      path: '/windows-ssd-hosting',
      name: 'WindowsSsdHosting',
      component: WindowsSsdHostingView,
      meta : {
        auth: true
      }
    },
    {
      path: '/email-hosting',
      name: 'EmailHosting',
      component: EmailHostingView,
      meta : {
        auth: true
      }
    },
    {
      path: '/email-server',
      name: 'EmailServer',
      component: EmailServerView,
      meta : {
        auth: true
      }
    },
    {
      path: '/kiem-tra-ten-mien',
      name: 'DomainPrice',
      component: DomainPriceView,
      meta : {
        auth: true
      }
    },
    {
      path: '/may-chu-ao',
      name: 'ServerVps',
      component: ServerVpsView,
      meta : {
        auth: true
      }
    },
    {
      path: '/may-chu-rieng',
      name: 'ServerView',
      component: ServerView,
      meta : {
        auth: true
      }
    },
    {
      path: '/may-chu-co-so-du-lieu',
      name: 'ServerDatabaseView',
      component: ServerDatabaseView,
      meta : {
        auth: true
      }
    },
    {
      path: '/danh-sach-dich-vu',
      name: 'ServiceList',
      component: ServiceListView,
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
