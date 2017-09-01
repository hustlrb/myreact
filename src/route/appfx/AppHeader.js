import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Layout, Menu } from 'antd';
import './AppHeader.less'

import logo from '../example/ExampleLogo.svg';

const AppHeader = () => {
  return (
    <Layout.Header>
      <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
      <span className="header-title">共享干衣柜后台管理系统</span>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: "right", background: '#373D41' }}
      >
        <Menu.Item key="loginUser">您好，系统管理员</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default connect()(AppHeader);