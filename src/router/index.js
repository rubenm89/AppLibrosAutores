import { createRouter, createWebHistory } from 'vue-router'

import BooksView from '@/views/BooksView.vue';
import AuthorsView from '@/views/AuthorsView.vue';
import BookDetailView from '@/views/BookDetailView.vue';
import AuthorDetailView from '@/views/AuthorDetailView.vue';

const routes = [

  { path: '/books', 
    name: 'books', 
    component: BooksView 
  },
  { path: '/authors',
    name: 'authors', 
    component: AuthorsView 
  },
  { path: '/book/:id', 
    name: 'bookDetail', 
    component: BookDetailView,
    props: true,
  },
  { path: '/author/:id', 
    name: 'authorDetail', 
    component: AuthorDetailView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
