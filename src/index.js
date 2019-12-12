import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './assets/styles/common.scss';
import { ConfigProvider } from 'antd';
import routes from './router';
import store from './store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import utils from './utils';
moment.locale('zh-cn');
// utils.history.listen((location:any, action:any) => {
//   console.log(location, action);
// })
ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <Provider {...store}>
      <Router history={utils.history}>{routes}</Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
