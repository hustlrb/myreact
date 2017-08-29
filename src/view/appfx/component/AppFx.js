import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Icon, Menu, Breadcrumb } from 'antd';

import SiderMenu from './SiderMenu';
import { view as Home } from '../../home/';
import { view as Example } from '../../example/';

import './AppFx.css';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class AppFx extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Header>
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
        </Header>
        <Layout>
          <SiderMenu />
          <Layout>
            <Breadcrumb style={{ margin: '12px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: '12px', minHeight: '280px' }}>
              Content
            </Content>
            <Footer style={{ textAlign: 'center', padding: '12px'}}>
              衣家宝 ©2017 Created by http://lvyii.com
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default AppFx;
