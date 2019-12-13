export const staticRoutes = [
];
export default {
  '/root/home': {
    path: '/root/home',
    title: '概览',
    selfIcon: 'shouYe',
    noChildrenMenu: true,
    component: () => import('@pages/Home')
  }
};
