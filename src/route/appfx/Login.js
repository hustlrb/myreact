import React from 'react';
import PropTypes from 'prop-types';
import {Button, Row, Form, Input, Spin, message} from 'antd';
import config from '../../util/config';
import './login.less';

const FormItem = Form.Item;

const login = ({
                 loggingIn,
                 onOk,
                 form: {
                   getFieldDecorator,
                   validateFieldsAndScroll
                 }
               }) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }
  // console.log('---> form: ', styles.form);
  return (
    <div className="form">
      <div className="logo">
        <img src={config.logoSrc}/>
        <span>邻家优店</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请填写用户名'
              }
            ]
          })(<Input size='large' onPressEnter={handleOk} placeholder='用户名'/>)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请填写密码'
              }
            ]
          })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='密码'/>)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loggingIn}>
            登录
          </Button>
        </Row>

      </form>
    </div>
  )
};

login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func
};

const LoginForm = Form.create()(login);

const Login = (props) => {
  console.log('[DEBUG] ---> Login props: ', props);
  const {login, loading, loginButtonLoading} = props;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk (data) {
      login({...data, error:()=>{message.error('用户名或密码错误')}});
    }
  };
  return (
    <div className="spin">
      <Spin tip='加载用户信息...' spinning={loading} size='large'>
        <LoginForm {...loginProps} />
      </Spin>
    </div>
  )
};

export default Login;