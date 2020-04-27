import Login from '@/views/Login'
import Home from '@/views/Home'
import ArticleList from '@/views/ArticleList'
// import {BookFilled} from '@ant-design/icons'
const RouterConfig = [
  {
    path: '/',
    component: Home,
    child:[
      {
        path:'/article/ArticleList',
        component: ArticleList
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
        path:'/article/ArticleList'
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