import React, { Component } from 'react';
import css from './index.scss';
import { Button } from 'antd';
import utils from '@utils/index';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
@inject('User')
@observer
class Header extends Component {
  render() {
    let { User } = this.props;
    const { userInfo } = toJS(User);
    return (
      <div className={css.header}>
        <img className={css.headerImg} src={userInfo.sellerLogo} alt=""/>
        <div className={css.userInfoName}>您好：{userInfo.sellerName}</div>
        <Button
          type="danger"
          onClick={_ => {
            utils.logout();
          }}
        >
          退出
        </Button>
      </div>
    );
  }
}
export default Header;
