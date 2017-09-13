import React from 'react';
import {connect} from 'react-redux';
import {Route, Link, withRouter, Switch} from 'react-router-dom';
import {Layout, Breadcrumb} from 'antd';
import HeaderMenu from '../../component/HeaderMenu';
import SiderMenu from '../../component/SiderMenu';
import Dashboard from '../dashboard/Dashboard';
import User from '../user/User';
import {actionRequestLogin, actionRequestLogout} from "./redux";
import {selectLoading, selectLoggedIn} from './redux';
import Example from '../example/Example';
import CabinetList from "../cabinet/CabinetList";

import logo from '../example/ExampleLogo.svg';

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ?
    <span>{route.breadcrumbName}</span> :
    <Link to={"/" + paths.join("/")}>{route.breadcrumbName}</Link>;
};

const AppFx = (props) => {
  console.log('[DEBUG] ---> AppFx props: ', props);

  const {match} = props;
  return (
    <Layout style={{height: "100%"}}>
      <Layout.Header style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <Link to="/"><img src={logo} alt="logo" style={{display: "block", width: "48px", height: "48px"}} /></Link>
          <span style={{fontSize: "24px"}}>共享干衣柜后台管理系统</span>
        </div>
        <HeaderMenu user={{name: "admin"}} logout={props.logout} />
      </Layout.Header>
      <Layout style={{minHeight: "0"}}>
        <Layout.Sider style={{overflow: "auto"}}>
          <SiderMenu />
        </Layout.Sider>
        <Layout.Content style={{overflow: "auto"}}>
          <Breadcrumb itemRender={itemRender} />
          <Switch>
            <Route exact path={match.url} component={Dashboard}/>
            <Route exact path="/cabinet/list" component={CabinetList} />
            <Route exact path="/system/user" component={User} />
            <Route exact path="/example" component={Example}/>
          </Switch>
        </Layout.Content>
      </Layout>
      <Layout.Footer style={{textAlign: "center", background: "#fff"}}>
        衣家宝 版权所有 © 2017 由 绿蚁科技 提供技术支持
      </Layout.Footer>
    </Layout>
  )
};

const mapStateToProps = (appState, ownProps) => {
  return {
    loading: selectLoading(appState),
    loggedIn: selectLoggedIn(appState)
  };
};

const mapDispatchToProps = {
  login: actionRequestLogin,
  logout: actionRequestLogout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppFx));
