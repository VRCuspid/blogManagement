import Login from '@/views/Login'
import Home from '@/views/Home'
import Articlelist from '@/views/Article/Articlelist'
import ArticleEditor from '@/views/Article/ArticleEditor'
import Taglist from '@/views/Tag/Taglist'
import TagEditor from '@/views/Tag/TagEditor'
// import {BookFilled} from '@ant-design/icons'
const RouterConfig = [
  {
    path: '/login',
    component: Login,
    exact:true
  },
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
      },{
        path:'/tag/Taglist',
        component: Taglist
      },{
        path: '/tag/Tagadd',
        component: TagEditor
      },{
        path: '/tag/Tagedit',
        component: TagEditor
      },
    ]
  },
]

const MenuRoute = [
  {
    id:101,
    name:'文章管理',
    path:'/article/Articlelist'
  },
  {
    id:201,
    name:'标签管理',
    path:'/tag/Taglist',
  }
]

export { MenuRoute,RouterConfig }
export default RouterConfig