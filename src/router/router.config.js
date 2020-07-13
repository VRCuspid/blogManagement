import Login from '@/views/Login'
import Home from '@/views/Home'
import Articlelist from '@/views/Article/Articlelist'
import ArticleEditor from '@/views/Article/ArticleEditor'
// import {BookFilled} from '@ant-design/icons'
const RouterConfig = [
  {
    path: '/',
    component: Home,
    child:[
      {
        path:'/article/Articlelist',
        component: Articlelist,
      },{
        path:'/article/Articleadd',
        component: ArticleEditor,
      },{
        path:'/article/Articleedit',
        component: ArticleEditor,
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const MenuRoute = [
  {
    id:101,
    name:'文章管理',
    path:'/article/Articlelist'
  },
  // {
  //   name:'文章',
  //   id:100,
  //   path:'article',
  //   children: [
  //     {
  //       id:101,
  //       name:'文章列表',
  //       path:'/article/Articlelist'
  //     },{
  //       id:102,
  //       name:'新增文章',
  //       path:'/article/Articleadd'
  //     }
  //   ]
  // }
]

export { MenuRoute,RouterConfig }
export default RouterConfig