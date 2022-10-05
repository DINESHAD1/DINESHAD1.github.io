import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountDown from '@/components/CountDown'
import TodoApp from '@/views/TodoApp'
import CalculatorApp from '@/views/CalculatorApp'
import WeatherApp from '@/views/WeatherApp'
import EmployeeDetails from '@/views/EmployeeDetails'
import EmployeeD from '@/components/EmployeeD'
import AddEmployee from '@/components/AddEmployee'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/addemployee',
    name:'addemployee',
    component:AddEmployee
  },
  {
    path:'/employeedetails1',
    name:'employeedetails1',
    component:EmployeeD
  },
  {
    path:'/countdown',
    name:'countdown',
    component: CountDown
  },
  {
    path:'/todoapp',
    name:'todoapp',
    component:TodoApp
    
  },
  {
    path:'/calculator',
    name:'calculator',
    component: CalculatorApp
  },
  {
    path:'/employeedetails',
    name:'employeedetails',
    component:EmployeeDetails

  },
  
  {
    path:'/weatherapp',
    name:'weatherapp',
    component:WeatherApp
  }
  ,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
