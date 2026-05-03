import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Login, Register } from './components/Auth';
import { ParcelTracking, CreateParcel } from './components/Parcel';
import { AdminDashboard, AdminParcels } from './components/Admin';
import { AppLayout } from './components/Layout';
import { authAPI } from './api/endpoints';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('login');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      setCurrentView('home');
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    const userData = localStorage.getItem('user');
    setUser(JSON.parse(userData));
    setCurrentView('home');
  };

  const handleRegisterSuccess = () => {
    const userData = localStorage.getItem('user');
    setUser(JSON.parse(userData));
    setCurrentView('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setCurrentView('login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="auth-container">
        {currentView === 'login' ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Register onRegisterSuccess={handleRegisterSuccess} />
        )}
        <button
          onClick={() => setCurrentView(currentView === 'login' ? 'register' : 'login')}
          className="toggle-auth-btn"
        >
          {currentView === 'login' ? 'Create Account' : 'Login'}
        </button>
      </div>
    );
  }

  return (
    <AppLayout user={user} onLogout={handleLogout}>
      <div className="content-area">
        {user?.role === 'customer' && (
          <div>
            <ParcelTracking />
            <CreateParcel />
          </div>
        )}
        
        {user?.role === 'admin' && (
          <div>
            <AdminDashboard />
            <AdminParcels />
          </div>
        )}
        
        {user?.role === 'rider' && (
          <div>
            <h1>Rider Dashboard</h1>
            <p>View and manage your deliveries</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default App;
