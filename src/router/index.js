import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routeConfig from './routes';
import rootRouteConfig, { staticRoutes } from './rootRoutes';
import Loadable from 'react-loadable';

/**
 * 解析根路由配置
 * @param routeConfig
 */
export let defaultPage = '/root/home';
//用户本地权限多层级数据对比本地动态路由拆成平级
function parseRootRoute(menuResources, routeConfig) {
  let routes = [];
  menuResources &&
    menuResources.forEach((item) => {
      let route = routeConfig[item.url];
      if (!route) return;
      if (item.children && item.children.length && !route.noChildrenMenu) {
        routes = routes.concat(parseRootRoute(item.children, routeConfig));
      } else {
        routes.push({
          ...item,
          ...route
        });
      }
    });
  return routes;
}
//用户本地权限数据拼成route路由
function initRoute(routeConfig) {
  let routes = routeConfig.map((item, i) => {
    let RouteComponent = Loadable({
      loader: item.component,
      loading: () => {
        return <div/>;
      }
    });
    return (
      <Route
        key={i}
        path={item.path}
        render={function(props) {
          if (item.title && window.location.hash.indexOf(item.path) > 0) {
            document.title = item.title;
          }
          return <RouteComponent routeConfig={item} {...props} />;
        }}
      />
    );
  });
  if (routeConfig.find((v) => v.url === defaultPage)) {
    routes.push(<Redirect key={'-1'} to={defaultPage} />);
  }
  return routes;
}
export function rootRoutes(menuResources) {
  return <Switch>{initRoute([...parseRootRoute(menuResources, rootRouteConfig), ...staticRoutes])}</Switch>;
}
export default (
  <Switch>
    {initRoute(routeConfig)}
    <Redirect to={'/login'} />
  </Switch>
);
