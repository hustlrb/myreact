import React from 'react';
import PropTypes from 'prop-types';
import {Button, Row, Form, Input, Spin, message} from 'antd';
import config from '../../util/config';
import './login.less';

const LoginFormImpl = (props) => {
  const {loading, doSubmit, form: {getFieldDecorator, validateFieldsAndScroll}} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFieldsAndScroll((e, values) => {
      if (!e) {
        doSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {
          getFieldDecorator('username',
            {
              rules: [{
                required: true,
                message: '请填写用户名'
              }]
            })
          (<Input placeholder='用户名' disabled={loading} />)
        }
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('password',
            {
              rules: [{
                  required: true,
                  message: '请填写密码'
                }]
            })
          (<Input type='password' placeholder='密码'/>)
        }
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType="submit" loading={loading} className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
};

LoginFormImpl.propTypes = {
  loading: PropTypes.bool,
  doSubmit: PropTypes.func,
  form: PropTypes.object
};

const LoginForm = Form.create()(LoginFormImpl);

const Login = (props) => {
  console.log('[DEBUG] ---> Login props: ', props);
  const {login, loading} = props;
  const loginProps = {
    loading,
    doSubmit(data) {
      login({...data, error:()=>{message.error('用户名或密码错误')}});
    }
  };
  return (
    <div className="login-form">
      <Spin tip='加载用户信息...' spinning={loading} size='large'>
        <div className="login-form-logo">
          <img src={config.logoSrc}/>
          <span>衣家宝</span>
        </div>
        <LoginForm {...loginProps} />
      </Spin>
    </div>
  )
};

export default Login;