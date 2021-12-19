import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/layout/Index.vue";
// import Index from  "@/views/index/index.vue";
import Home from "@/views/Home.vue";

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Login/About.vue"),
  // },
  //   {
  //     path: '/',
  //     name: 'Layout',
  //     component: Layout,
  //     redirect:'/index',
  //     meta:{
  //       title: "test"
  //     },
  //     children:[
  //       {
  //         path:'/index',
  //         name:'Index',
  //         component:Index,
  //         meta: {
  //           title: '首页',
  //           icon: 'iconfont icon-shouye',
  //           isRoot:true,
  //           isAffix:true
  //         }
  //       },
  //     ]
  //   },
  //   // {
  //   //   path:'/system',
  //   //   name:'System',
  //   //   redirect:'/system/user',
  //   //   component:Layout,
  //   //   meta:{
  //   //     title:'系统管理',
  //   //     icon:'el-icon-setting',
  //   //   },
  //   //   children:[
  //   //     {
  //   //       path: 'user',
  //   //       name:'User',
  //   //       component:()=>import('@/views/system/user/index.vue'),
  //   //       meta:{
  //   //         title:'用户管理',
  //   //         icon:'el-icon-s-custom'
  //   //       }
  //   //     },
  //   //     {
  //   //       path:'/userCenter',
  //   //       name:'UserCenter',
  //   //       component:()=>import('@/views/system/user/userCenter/userCenter.vue'),
  //   //       meta: {
  //   //         title: '个人中心',
  //   //         icon: 'iconfont icon-shouye',
  //   //         hidden:true
  //   //       }
  //   //     },
  //   //     {
  //   //       path: 'dept',
  //   //       name:'Dept',
  //   //       component:()=>import('@/views/system/dept/dept.vue'),
  //   //       meta:{
  //   //         title:'部门管理',
  //   //         icon:'iconfont icon-bumen'
  //   //       }
  //   //     },
  //   //     {
  //   //       path: 'role',
  //   //       name: 'Role',
  //   //       component:()=>import('@/views/system/role/index.vue'),
  //   //       meta:{
  //   //         title: "角色管理",
  //   //         icon: 'iconfont icon-jiaoseguanli'
  //   //       }
  //   //     },
  //   //     {
  //   //       path: 'menu',
  //   //       name:'Menu',
  //   //       component:()=>import('@/views/system/menu/index.vue'),
  //   //       meta:{
  //   //         title: "菜单管理",
  //   //         icon: "iconfont icon-caidanguanli"
  //   //       }
  //   //     }
  //   //   ]
  //   // },
    {
      path: '/redirect',
      component: Layout,
      meta:{
        hidden: true
      },
      children: [
        {
          path: '/redirect/:path(.*)',
          component: ()=>import('@/views/redirect.vue')
        }
      ]
    },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/login/Index.vue"),
    meta: {
      hidden: true
    }
  },
  // {
  //   path:'/layout',
  //   name: 'Layout',
  //   component:()=> import('@/views/layout/index.vue')
  // }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;