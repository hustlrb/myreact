import React from 'react';
import { Layout, Menu } from 'antd';
import './AppHeader.css'

const AppHeader = () => {
  return (
    <Layout.Header>
      <div className="logo" />
      <div style={{float: "left"}}>共享干衣柜后台管理系统</div>
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

export default AppHeader;