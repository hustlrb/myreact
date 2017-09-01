import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const AppContent = ({children}) => {
  return (
    <Layout.Content style={{background: '#fff', padding: '12px', minHeight: '280px'}}>
      {children}
    </Layout.Content>
  );
};

export default connect()(AppContent);