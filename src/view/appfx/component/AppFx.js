import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppMenu from './AppMenu';
import AppBreadcrumb from './AppBreadcrumb';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const AppFx = () => {
  console.log('AppFx location: ', this.props);
  return (
    <Layout style={{ height: "100%" }}>
      <AppHeader />
      <Layout>
        <AppMenu />
        <Layout>
          <AppBreadcrumb />
          <AppContent />
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  )
};

export default connect(null, null)(AppFx);
