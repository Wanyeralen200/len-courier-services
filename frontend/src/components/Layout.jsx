import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../styles/layout.css';

const { Header, Content, Footer } = Layout;

export const AppLayout = ({ children, user, onLogout }) => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="logo">
          <h2>🚚 Len Courier</h2>
        </div>
        <Menu theme="dark" mode="horizontal" className="header-menu">
          {user?.role === 'customer' && (
            <>
              <Menu.Item key="home"><Link to="/customer/home">Home</Link></Menu.Item>
              <Menu.Item key="track"><Link to="/customer/track">Track Parcel</Link></Menu.Item>
              <Menu.Item key="book"><Link to="/customer/book">Book Delivery</Link></Menu.Item>
              <Menu.Item key="history"><Link to="/customer/history">History</Link></Menu.Item>
            </>
          )}
          {user?.role === 'rider' && (
            <>
              <Menu.Item key="home"><Link to="/rider/home">Home</Link></Menu.Item>
              <Menu.Item key="deliveries"><Link to="/rider/deliveries">My Deliveries</Link></Menu.Item>
              <Menu.Item key="earnings"><Link to="/rider/earnings">Earnings</Link></Menu.Item>
            </>
          )}
          {user?.role === 'admin' && (
            <>
              <Menu.Item key="dashboard"><Link to="/admin/dashboard">Dashboard</Link></Menu.Item>
              <Menu.Item key="parcels"><Link to="/admin/parcels">Parcels</Link></Menu.Item>
              <Menu.Item key="riders"><Link to="/admin/riders">Riders</Link></Menu.Item>
              <Menu.Item key="customers"><Link to="/admin/customers">Customers</Link></Menu.Item>
            </>
          )}
        </Menu>
        <div className="header-actions">
          <span>{user?.firstName} {user?.lastName}</span>
          <Button type="text" danger onClick={onLogout} icon={<LogoutOutlined />}>
            Logout
          </Button>
        </div>
      </Header>
      <Content className="app-content">
        {children}
      </Content>
      <Footer className="app-footer">
        <p>&copy; 2024 Len Courier Services. All rights reserved.</p>
      </Footer>
    </Layout>
  );
};
