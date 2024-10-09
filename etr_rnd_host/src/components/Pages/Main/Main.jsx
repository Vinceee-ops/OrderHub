import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../header/header';
import Sidebar from '../../sidebar/sidebar';
import { CustomerSection, RemoteRoutes, OrderSection } from 'global-routes';

const Main = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Update active component based on URL
  useEffect(() => {
    const path = location.pathname.replace('/component/', ''); 
    setActiveComponent(path || ''); 
  }, [location.pathname]);

  // Function to handle navigation and set active component
  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
    navigate(`/component/${componentName}`); 
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'orders':
        return <OrderSection />; 
      case 'customers':
        return <CustomerSection />; 
      default:
        return <div>Select a component from the sidebar.</div>; 
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <Header />
      </nav>
      <div className="d-flex flex-row flex-grow-1">
        <Sidebar activeComponent={handleComponentChange} />
        <div className="flex-grow-1 p-3">
          <Suspense fallback={<div>Loading...</div>}>
            {renderComponent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Main;
