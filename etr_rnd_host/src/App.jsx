// App.js
import React, { useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import OrderSection from 'etr_rnd_orderlist/OrderSection';
import CustomerSection from 'etr_rnd_customerlist/CustomerSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('');

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
    <>
    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
      <Header />
    </nav>
      <div className="d-flex flex-row flex-grow-1">
        <Sidebar activeComponent={setActiveComponent} />
        <div className="flex-grow-1 p-3">
          {renderComponent()}
        </div>
      </div>
    </>

  );
};

export default App;
