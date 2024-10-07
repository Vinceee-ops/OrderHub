import React, { useState, Suspense } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load OrderSection and CustomerSection
const OrderSection = React.lazy(() => import('etr_rnd_orderlist/OrderSection'));
const CustomerSection = React.lazy(() => import('etr_rnd_customerlist/CustomerSection'));

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
          <Suspense fallback={<div>Loading...</div>}>
            {renderComponent()}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
