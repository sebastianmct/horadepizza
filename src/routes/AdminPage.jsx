import React, { useState } from 'react';
import MenuManagement from './admin/MenuManagement';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'orders', label: 'Pedidos', icon: '🍕' },
    { id: 'menu', label: 'Menú', icon: '📋' },
    { id: 'customers', label: 'Clientes', icon: '👥' },
    { id: 'analytics', label: 'Analíticas', icon: '📈' },
    { id: 'settings', label: 'Configuración', icon: '⚙️' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    mainLayout: {
      display: 'flex'
    },
    sidebar: {
      width: '256px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      minHeight: '100vh'
    },
    sidebarHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb'
    },
    sidebarTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 4px 0'
    },
    sidebarSubtitle: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0'
    },
    nav: {
      marginTop: '24px'
    },
    navButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      textAlign: 'left',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: '16px',
      color: '#374151'
    },
    navButtonActive: {
      backgroundColor: '#eff6ff',
      borderRight: '2px solid #3b82f6',
      color: '#2563eb'
    },
    navButtonHover: {
      backgroundColor: '#f9fafb'
    },
    navIcon: {
      fontSize: '20px',
      marginRight: '12px'
    },
    content: {
      flex: '1',
      padding: '32px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    metricCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    metricContent: {
      display: 'flex',
      alignItems: 'center'
    },
    metricIcon: {
      padding: '8px',
      borderRadius: '8px',
      marginRight: '16px'
    },
    metricIconGreen: {
      backgroundColor: '#dcfce7'
    },
    metricIconBlue: {
      backgroundColor: '#dbeafe'
    },
    metricIconYellow: {
      backgroundColor: '#fef3c7'
    },
    metricIconRed: {
      backgroundColor: '#fee2e2'
    },
    metricIconText: {
      fontSize: '24px'
    },
    metricLabel: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#6b7280',
      margin: '0 0 4px 0'
    },
    metricValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827',
      margin: '0'
    },
    chartCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      marginBottom: '32px'
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px'
    },
    chartPlaceholder: {
      height: '256px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    chartContent: {
      textAlign: 'center'
    },
    chartIcon: {
      fontSize: '48px',
      marginBottom: '8px'
    },
    chartText: {
      color: '#6b7280',
      margin: '0 0 4px 0'
    },
    chartSubtext: {
      fontSize: '14px',
      color: '#9ca3af',
      margin: '0'
    },
    ordersCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    orderItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      marginBottom: '12px'
    },
    orderInfo: {
      flex: '1'
    },
    orderCustomer: {
      fontWeight: '500',
      color: '#1f2937',
      margin: '0 0 4px 0'
    },
    orderDetails: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '0'
    },
    orderStatus: {
      textAlign: 'right'
    },
    statusBadge: {
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '500',
      marginBottom: '4px',
      display: 'inline-block'
    },
    statusDelivered: {
      backgroundColor: '#dcfce7',
      color: '#166534'
    },
    statusReady: {
      backgroundColor: '#dbeafe',
      color: '#1e40af'
    },
    statusPreparing: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    statusPending: {
      backgroundColor: '#f3f4f6',
      color: '#374151'
    },
    orderTime: {
      fontSize: '14px',
      color: '#9ca3af',
      margin: '0'
    },
    pageCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    pageText: {
      color: '#6b7280',
      margin: '0'
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h1 style={styles.title}>Dashboard - Hora de Pizza</h1>
            
            {/* Métricas principales */}
            <div style={styles.metricsGrid}>
              <div style={styles.metricCard}>
                <div style={styles.metricContent}>
                  <div style={{...styles.metricIcon, ...styles.metricIconGreen}}>
                    <span style={styles.metricIconText}>💰</span>
                  </div>
                  <div>
                    <p style={styles.metricLabel}>Ventas Hoy</p>
                    <p style={styles.metricValue}>$1,250</p>
                  </div>
                </div>
              </div>
              
              <div style={styles.metricCard}>
                <div style={styles.metricContent}>
                  <div style={{...styles.metricIcon, ...styles.metricIconBlue}}>
                    <span style={styles.metricIconText}>🍕</span>
                  </div>
                  <div>
                    <p style={styles.metricLabel}>Pedidos</p>
                    <p style={styles.metricValue}>24</p>
                  </div>
                </div>
              </div>
              
              <div style={styles.metricCard}>
                <div style={styles.metricContent}>
                  <div style={{...styles.metricIcon, ...styles.metricIconYellow}}>
                    <span style={styles.metricIconText}>👥</span>
                  </div>
                  <div>
                    <p style={styles.metricLabel}>Clientes</p>
                    <p style={styles.metricValue}>156</p>
                  </div>
                </div>
              </div>
              
              <div style={styles.metricCard}>
                <div style={styles.metricContent}>
                  <div style={{...styles.metricIcon, ...styles.metricIconRed}}>
                    <span style={styles.metricIconText}>⭐</span>
                  </div>
                  <div>
                    <p style={styles.metricLabel}>Rating</p>
                    <p style={styles.metricValue}>4.8</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gráfico simple */}
            <div style={styles.chartCard}>
              <h3 style={styles.chartTitle}>Ventas de la Semana</h3>
              <div style={styles.chartPlaceholder}>
                <div style={styles.chartContent}>
                  <div style={styles.chartIcon}>📊</div>
                  <p style={styles.chartText}>Gráfico de ventas</p>
                  <p style={styles.chartSubtext}>Lun: $800 | Mar: $950 | Mié: $1,100 | Jue: $1,250 | Vie: $1,400</p>
                </div>
              </div>
            </div>

            {/* Pedidos recientes */}
            <div style={styles.ordersCard}>
              <h3 style={styles.chartTitle}>Pedidos Recientes</h3>
              {[
                { id: 1, customer: 'Juan Pérez', order: 'Pizza Margherita', status: 'En preparación', time: '14:30' },
                { id: 2, customer: 'María García', order: 'Pizza Pepperoni', status: 'Listo', time: '14:15' },
                { id: 3, customer: 'Carlos López', order: 'Pizza Hawaiana', status: 'Entregado', time: '14:00' },
                { id: 4, customer: 'Ana Martínez', order: 'Pizza Vegetariana', status: 'Pendiente', time: '13:45' }
              ].map(order => (
                <div key={order.id} style={styles.orderItem}>
                  <div style={styles.orderInfo}>
                    <p style={styles.orderCustomer}>{order.customer}</p>
                    <p style={styles.orderDetails}>{order.order}</p>
                  </div>
                  <div style={styles.orderStatus}>
                    <span style={{
                      ...styles.statusBadge,
                      ...(order.status === 'Entregado' ? styles.statusDelivered :
                          order.status === 'Listo' ? styles.statusReady :
                          order.status === 'En preparación' ? styles.statusPreparing :
                          styles.statusPending)
                    }}>
                      {order.status}
                    </span>
                    <p style={styles.orderTime}>{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div>
            <h1 style={styles.title}>Gestión de Pedidos</h1>
            <div style={styles.pageCard}>
              <p style={styles.pageText}>Aquí puedes gestionar todos los pedidos de la pizzería.</p>
            </div>
          </div>
        );
      
      case 'menu':
        return <MenuManagement />;
      
      case 'customers':
        return (
          <div>
            <h1 style={styles.title}>Clientes</h1>
            <div style={styles.pageCard}>
              <p style={styles.pageText}>Información y gestión de clientes.</p>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div>
            <h1 style={styles.title}>Analíticas</h1>
            <div style={styles.pageCard}>
              <p style={styles.pageText}>Reportes y estadísticas detalladas.</p>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h1 style={styles.title}>Configuración</h1>
            <div style={styles.pageCard}>
              <p style={styles.pageText}>Configuración general del sistema.</p>
            </div>
          </div>
        );
      
      default:
        return <div>Página no encontrada</div>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainLayout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h2 style={styles.sidebarTitle}>🍕 Hora de Pizza</h2>
            <p style={styles.sidebarSubtitle}>Panel de Administración</p>
          </div>
          
          <nav style={styles.nav}>
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  ...styles.navButton,
                  ...(activeTab === item.id ? styles.navButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.id) {
                    e.target.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                <span style={{fontWeight: '500'}}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}