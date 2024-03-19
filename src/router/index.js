import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeView from '../views/ListeView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/liste',
      name: 'liste',
      component: ListeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/admin/books',
      name: 'AdminBooksList',
      component: ()=> import('../views/admin/AdminBooksList.vue')
    },
    {
      path: '/admin/new-books',
      name: 'AdminNewBooks',
      component: ()=> import('../views/admin/AdminBooksCreate.vue')
    },    
    {
      path: '/admin/books/update/:id',
      name: 'AdminBooksUpdate',
      component: ()=> import('../views/admin/AdminBooksUpdate.vue')
    }
  ]
})

export default router
