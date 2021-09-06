import Form from "../pages/form/Form";
import View from "../pages/view/View";
import ViewTable from "../pages/view/table/Table";
import ViewPreview from "../pages/view/preview/Preview";
import ViewProcess from "../pages/view/process/Process";


/**
 * @path 路由地址
 * @name 路由名称
 * @hideMenu 是否在菜单栏显示路由
 * @component 路由指向模块
 * @exact 是都严格匹配
 * @children 子项
 * **/
const routers = [
    {
        path:'/',
        exact:true,
        component:Form
    },

    {
        path:'/form',
        exact:true,
        name:'form',
        component:Form
    },
    {
        path:'/view',
        name:'home',
        component:View,
        children:[
            {
                path:'/view/table',
                exact:true,
                name:'table',
                component:ViewTable
            },
            {
                path:'/view/preview',
                name:'preview',
                component:ViewPreview
            },
            {
                path:'/view/process',
                name:'process',
                component:ViewProcess
            }
        ]
    }
]
export default routers