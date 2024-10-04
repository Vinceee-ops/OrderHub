// Sidebar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ activeComponent }) => {
  const handleOrder = () => {
    activeComponent('orders');
  };

  const handleCustomer = () => {
    activeComponent('customers');
  };

  return (
    <nav className="bg-light sidebar" style={{ width: '250px' }} role="navigation">
      <div className="container-fluid">
        <ul className="list-unstyled">
          <li>
            <a onClick={handleOrder} className="d-block p-2" role="button" tabIndex={0}>
              Order List
            </a>
          </li>
          <li>
            <a onClick={handleCustomer} className="d-block p-2" role="button" tabIndex={0}>
              Customers List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
