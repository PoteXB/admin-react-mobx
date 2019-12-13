import React, { PureComponent } from 'react';
import css from './index.scss';
import Menu from './components/Menu';
import Header from './components/Header';
import { rootRoutes } from '@router/index';
class Root extends PureComponent {
  componentDidMount() {
  }
  render() {
    return (
      <div className={css.root}>
        <div className={css.menu}>
          <Menu/>
        </div>
        <div id="container" className={css.content}>
          <Header/>
          {rootRoutes([{
            'children': [
              {
                'children': null,
                'content': '买家消息',
                'id': 1682,
                'url': '/im/getImToken'
              },
              {
                'children': null,
                'content': '店铺信息-待办事项',
                'id': 1686,
                'url': '/index/sellerInfo,/index/backlog'
              }
            ],
            'content': '概览',
            'id': 1544,
            'url': '/root/home'
          }])}
        </div>
      </div>
    );
  }
}
export default Root;
