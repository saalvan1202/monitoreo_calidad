import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import SideMenu from '../../side-menu/SideMenu';
// import accordLogo from '/public/img/accord_logo.png';
import PropTypes from 'prop-types';

const { Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};

const PrincipalLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout hasSider style={{ background: '#f1f5f9' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        style={{ ...siderStyle, zIndex: 1 }}
        theme="light"
        className="border-r border-slate-200"
      >
        <div className="demo-logo-vertical border-b border-slate-200 flex justify-center items-center">
          <img src={''} className="w-11" alt="accord logo" />
        </div>
        <SideMenu collapsed={collapsed} />
      </Sider>
      <Layout
        style={{
          marginInlineStart: collapsed ? 80 : 200,
          background: 'none',
        }}
      >
        <Content
          style={{
            margin: '16px 16px 0',
            overflow: 'initial',
            borderRadius: 0,
            background: 'none',
          }}
        >
          <div
            style={{
              // padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: 0,
            }}
            className="border border-slate-200"
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background: 'none',
          }}
        >
          ACCORD Technology ©{new Date().getFullYear()} Created by Accord
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PrincipalLayout;

PrincipalLayout.propTypes = {
  children: PropTypes.node,
};
