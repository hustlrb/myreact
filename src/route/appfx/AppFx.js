import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppMenu from './AppMenu';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const AppFx = (props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <AppHeader />
      <Layout>
        <AppMenu />
        <Layout>
          <AppContent {...props} />
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  )
};

export default AppFx;
