// 所有路由配置的数组
import Home from '../pages/Home'
import Search from '../pages/Search'
import Register from '../pages/Register'
import Login from '@/pages/Login'
export default[
    {
        path:'/',
        component:Home
    },
    {
        name: 'search', // 每个路由配置都可以指定一个标识名称
        path: '/search/:keyword?',  // 需要指定params参数, 标识名称是keyword
        // path: '/search/:keyword',  // 需要指定params参数, 标识名称是keyword
        component:Search,
        props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2, xxx: 12})

    },
    {
        name:'register',
        path:'/register',
        component:Register,
        
    },
    {
        path:'/login',
        component:Login
    },
]