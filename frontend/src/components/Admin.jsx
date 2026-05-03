import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/endpoints';
import { Card, Row, Col, Table, Statistic, message } from 'antd';
import { UserOutlined, ShoppingOutlined, MoneyCollectOutlined, TruckOutlined } from 'antd/icons';
import '../styles/admin.css';

export const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminAPI.getDashboardStats();
        setStats(response.data);
      } catch (error) {
        message.error('Failed to fetch dashboard stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <Row gutter={16}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Parcels"
              value={stats?.totalParcels || 0}
              prefix={<ShoppingOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Delivered"
              value={stats?.totalDelivered || 0}
              prefix={<TruckOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="In Transit"
              value={stats?.inTransit || 0}
              prefix={<TruckOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Revenue"
              value={stats?.totalRevenue || 0}
              prefix={<MoneyCollectOutlined />}
              suffix="KES"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Riders"
              value={stats?.totalRiders || 0}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Customers"
              value={stats?.totalCustomers || 0}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export const AdminParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await adminAPI.getAllParcels();
        setParcels(response.data.parcels);
      } catch (error) {
        message.error('Failed to fetch parcels');
      } finally {
        setLoading(false);
      }
    };
    fetchParcels();
  }, []);

  const columns = [
    { title: 'Tracking ID', dataIndex: 'trackingId', key: 'trackingId' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Customer', dataIndex: ['customer', 'firstName'], key: 'customer' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' }
  ];

  return (
    <div className="admin-parcels">
      <h1>All Parcels</h1>
      <Table dataSource={parcels} columns={columns} loading={loading} rowKey="_id" />
    </div>
  );
};
