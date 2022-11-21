import { createRouter, createWebHistory } from 'vue-router'
import AppUserList from '../views/AppUserList.vue'
import AppLegal from "../views/AppLegal.vue"
import AppUser from "../views/AppUser.vue"
import AppContact from "../views/AppContact.vue"
import AppSearch from "../views/AppSearch.vue"
import MovieDetail from '../views/MovieDetail.vue'
import UserInfo from "../components/UserInfo.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppUserList
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact
  },
  {
    path: '/search',
    name: 'Search',
    component: AppSearch
  },
  {
    path: '/legal',
    name: 'Legal',
    component: AppLegal
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail,
  },
  {
    path: '/users/:username',
    name: "Users",
    component: AppUser,
    children: [
        {
          path: "/user/:username/info",
          name: "Info",
          component: UserInfo
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
