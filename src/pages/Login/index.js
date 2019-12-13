import React, { Component } from 'react';
import css from './index.scss';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Row, Col, Button } from 'antd';
import utils from '@utils';
const FormItem = Form.Item;
@inject('User')
@observer
class Login extends Component {
  state = {};
  submitForm = () => {
    utils.history.replace('/root/home');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={css.login}>
        <Form onSubmit={this.submitForm} className="login-form">
          <FormItem>
            <div className={css.title}>登录商家平台</div>
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入账号!' }]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="账号"/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }]
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                      placeholder="密码"/>)}
          </FormItem>
          <FormItem className={css.formItem}>
            {getFieldDecorator('verifyCode', {
              rules: [{ required: true, message: '请输入验证码!' }]
            })(<Input className={css.input} placeholder="验证码" type="text"/>)}
          </FormItem>
          <FormItem>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
          <Row className={css.linkBtnBar}>
            <Col span={8}>{<Link to="/checkPhone">忘记密码</Link>}</Col>
            <Col className={css.rightText} span={8} offset={8}>
              <Link to="/register">商家入驻</Link>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
