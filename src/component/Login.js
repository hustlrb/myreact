import React from 'react';
import PropTypes from 'prop-types';
import {Button, Row, Form, Input, Spin, message} from 'antd';
import config from '../util/config';
import './login.less';

const FormItem = Form.Item;

const LoginFormImpl = (props) => {
  const {loading, onOk, form: {getFieldDecorator, validateFieldsAndScroll}} = props;

  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }

  return (
    <div className="form">
      <div className="logo">
        <img src={config.logoSrc}/>
        <span>衣家宝</span>
      </div>
      <Form>
        <FormItem>
          {
            getFieldDecorator('username',
              {
                rules: [{
                  required: true,
                  message: '请填写用户名'
                }]
              })
            (<Input size='large' placeholder='用户名'/>)
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请填写密码'
              }
            ]
          })(<Input size='large' type='password' placeholder='密码'/>)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loading}>
            登录
          </Button>
        </Row>

      </Form>
    </div>
  )
};

LoginFormImpl.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.bool,
  onOk: PropTypes.func
};

const LoginForm = Form.create()(LoginFormImpl);

const Login = (props) => {
  console.log('[DEBUG] ---> Login props: ', props);
  const {login, loading} = props;
  const loginProps = {
    loading,
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