import React from 'react';
import { Link } from 'react-router';
import { Layout, Breadcrumb } from 'antd';
import AppHeaderMenu from './AppHeaderMenu';
import AppSiderMenu from './AppSiderMenu';
import logo from '../example/ExampleLogo.svg';

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ?
    <span>{route.breadcrumbName}</span> :
    <Link to={"/" + paths.join("/")}>{route.breadcrumbName}</Link>;
};

const AppFx = (props) => {
  const {routes, params, children} = props;
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Header>
        <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
        <div className="app-header-title">共享干衣柜后台管理系统</div>
        <AppHeaderMenu />
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <AppSiderMenu />
        </Layout.Sider>
        <Layout>
          <Breadcrumb routes={routes} params={params} itemRender={itemRender} />
          <Layout.Content>
            <div className="app-content">
              {children}
            </div>
          </Layout.Content>
          <Layout.Footer>
            衣家宝 版权所有 © 2017 由 绿蚁科技 提供技术支持
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default AppFx;
