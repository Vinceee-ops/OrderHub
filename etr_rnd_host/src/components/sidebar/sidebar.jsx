import React from 'react';

const Sidebar = ({ activeComponent }) => {
  const handleOrder = () => {
    activeComponent('orders');
  };

  const handleCustomer = () => {
    activeComponent('customers');
  };

  return (
    <div className="d-flex flex-column p-3 text-white bg-light" style={{ width: '280px', height: '100vh' }}>
      <ul className="nav nav-pills flex-column">
        <li>
          <button className="nav-link text-black" onClick={handleOrder}>
            Orders
          </button>
        </li>
        <li>
          <button className="nav-link text-black" onClick={handleCustomer}>
            Customers
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
