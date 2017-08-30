import React from 'react';
import { Breadcrumb } from 'antd';

const AppBreadcrumb = () => {
  return (
    <Breadcrumb style={{ margin: '12px' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;