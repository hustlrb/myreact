import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import { view as About } from '../../example/';

const Other = () => (
  <div>
    <h2>Other</h2>
  </div>
);

const Another = () => (
  <div>
    <h2>Another</h2>
  </div>
  );

const AppContent = () => {
  return (
    <Layout.Content style={{background: '#fff', padding: '12px', minHeight: '280px'}}>
      <Route path="/about" component={About}/>
      <Route path="/other" component={Other}/>
      <Route path="/another" component={Another}/>
    </Layout.Content>
  );
};

export default AppContent;