import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Layout, Breadcrumb } from 'antd';
import './style.less';

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ?
    <span>{route.breadcrumbName}</span> :
    <Link to={"/" + paths.join("/")}>{route.breadcrumbName}</Link>;
};

const AppContent = (props) => {
  const {routes, params, children} = props;
  return (
    <div>
      <Breadcrumb routes={routes} params={params} itemRender={itemRender} />
      <Layout.Content>
        {children}
      </Layout.Content>
    </div>
  );
};

export default connect()(AppContent);