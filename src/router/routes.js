export default [
  //基础路由配置 没有菜单栏  没有权限校验
  {
    path: '/root',
    title: '未来集市商家管理后台',
    component: () => import('@pages/Root')
  },
  {
    path: '/login',
    title: '登录',
    component: () => import('@pages/Login')
  },
];
