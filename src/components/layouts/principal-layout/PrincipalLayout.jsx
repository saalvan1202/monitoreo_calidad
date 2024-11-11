import { useState } from 'react';
import { Layout } from 'antd';
import SideMenu from '../../side-menu/SideMenu';
import PropTypes from 'prop-types';
import citeLogo from '/public/img/logo_cite.png';
import citeLogoPequenio from '/public/img/cite_logo_pequenio.jpg';
import escudoPeru from '/public/img/escudo_peru.png';
import './PrincipalLayout.scss';
import Dropdowns from './Dropdawns';

const { Header, Content, Footer, Sider } = Layout;

const PrincipalLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          padding: 0,
          background: '#3C3F41',
          zIndex: 2,
          height: '60px', // Ajusta esta propiedad para cambiar la altura del header
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: collapsed ? 80 : 200,
            height: '100%',
            backgroundColor: 'white',
            left: 0,
            top: 0,
            bottom: 0,
            transition: 'width 0.2s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <img src={collapsed ? citeLogoPequenio : citeLogo} alt="cite_logo" className={collapsed && 'w-20'} />
        </div>
        <div className='flex gap-4 justify-center items-center px-[12px]'>
          <Dropdowns />
        </div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          theme="light"
          className="border-r bg-fondo-footer"
        >
          <SideMenu />
        </Sider>
        <Layout style={{ background: '#f1f5f9' }}>
          <Content
            style={{
              margin: '12px 12px 0',
              overflow: 'initial',
              borderRadius: 0,
              background: 'none',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                background: '#3C3F41',
                borderRadius: 0,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              padding: 0,
              marginTop: 15,
              height: 60,
              backgroundColor: '#3C3F41',
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            <div className='h-full bg-slate-100 flex justify-start'>
              <img src={escudoPeru} alt="escudo_peru" className='w-16' />
              <div className='bg-botones-red text-white flex justify-center items-center px-4 border-r-[3px] border-slate-100 font-inter font-light'>
                PERÚ
              </div>
              <div className='relative flex justify-center items-center bg-fondo-footer'>
                <p className='text-start pl-3 pr-5 text-white font-inter font-light text-sm'>
                  Ministerio<br /> de la Producción
                </p>
                <div
                  className='absolute right-0 top-0 h-full w-[3px] bg-white'
                  style={{
                    transform: 'skewX(40deg)',
                    transformOrigin: 'top right'
                  }}
                />
              </div>

            </div>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PrincipalLayout;

PrincipalLayout.propTypes = {
  children: PropTypes.node,
};