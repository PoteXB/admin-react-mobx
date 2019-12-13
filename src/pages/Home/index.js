import React, { PureComponent } from 'react';
import css from './index.scss';
class Home extends PureComponent {
  state = {};
  componentDidMount() {
  }
  render() {
    return (
      <div className={css.home}>首页</div>
    );
  }
}
export default Home;
