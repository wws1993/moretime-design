import React from 'react';
import Layout from 'dumi-theme-default/es/layout';
import 'antd/dist/antd.css';

export default ({ children, ...props }) => (
  <Layout {...props}>
    <>
      {/* <button>反馈</button> */}
      {children}
    </>
  </Layout>
);
