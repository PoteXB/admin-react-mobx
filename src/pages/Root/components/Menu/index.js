import React, { Component } from 'react';
import css from './index.scss';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import RootRoutes from '@router/rootRoutes';
import icons from './icons';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const icon = icons;
@inject('User')
@observer
class MenuComponent extends Component {
  state = {
    collapsed: false,
    openKeys: []
  };
  componentDidMount() {
    this.setState({
      openKeys: [this.getParent(this.props.location.pathname)]
    });
  }
  componentWillReceiveProps(a) {
    this.setState({
      openKeys: [this.getParent(a.location.pathname)]
    });
  }
  parseRootRoutes(menuResources, RootRoutes) {
    let menuItem = [];
    menuResources &&
    menuResources.forEach((item) => {
      if (item.noMenu) return;
      let route = RootRoutes[item.url];
      if (!route) return;
      item = {
        ...item,
        ...route
      };
      if (item.children && !item.noChildrenMenu) {
        menuItem.push(
          <SubMenu
            key={item.path}
            title={
              <span>
                  {item.selfIcon ? <Icon component={icon[item.selfIcon]}/> : null}
                <span>{item.content}</span>
                </span>
            }
          >
            {this.parseRootRoutes(item.children, RootRoutes)}
          </SubMenu>
        );
      } else {
        menuItem.push(
          <MenuItem key={item.path}>
            {item.selfIcon ? <Icon component={icon[item.selfIcon]}/> : null}
            <span className={css.text}>{item.content}</span>
          </MenuItem>
        );
      }
    });
    return menuItem;
  }
  getParent(pathname) {
    return pathname.replace(/\/[^\/]+$/g, '');
  }
  onOpenChange(openKeys) {
    if (openKeys.length == 1 || openKeys.length == 0) {
      this.setState({
        openKeys
      });
      return;
    }
    let lastKey = openKeys[openKeys.length - 1];
    if (lastKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      });
    } else {
      this.setState({
        openKeys: [lastKey]
      });
    }
  }
  render() {
    let { location, User } = this.props;
    let { openKeys } = this.state;
    let userInfo = toJS(User.userInfo);
    return (
      <div className={css.menu}>
        <div title="查看统计页" className={css.themeTitle}>
          商家管理系统
        </div>
        <Menu
          multiple={false}
          onClick={ev => {
            this.setState({
              openKeys: [this.getParent(ev.key)]
            });
            this.props.history.push(ev.key);
          }}
          selectedKeys={[location.pathname]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onOpenChange={this.onOpenChange.bind(this)}
          openKeys={openKeys}
        >
          {this.parseRootRoutes(userInfo.menuResources, RootRoutes)}
        </Menu>
      </div>
    );
  }
}
export default withRouter(MenuComponent);
