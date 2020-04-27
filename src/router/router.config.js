import Login from '@/views/Login'
import Home from '@/views/Home'
import Articlelist from '@/views/Article/Articlelist'
// import {BookFilled} from '@ant-design/icons'
const RouterConfig = [
  {
    path: '/',
    component: Home,
    child:[
      {
        path:'/article/Articlelist',
        component: Articlelist
      }
    ]
  },
  {
    path: '/login',
    exact:true,
    component: Login
  }
]

const MenuRoute = [
  {
    name:'文章',
    id:100,
    path:'article',
    children: [
      {
        id:101,
        name:'文章列表',
        path:'/article/Articlelist'
      },{
        id:102,
        name:'新增文章',
        path:'/article/AddArticle'
      }
    ]
  }
]

export { MenuRoute,RouterConfig }
export default RouterConfig