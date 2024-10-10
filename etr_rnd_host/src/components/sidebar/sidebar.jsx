import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="d-flex flex-column p-3 text-white bg-light" style={{ width: '280px', height: '100vh' }}>
      <ul className="nav nav-pills flex-column">
        <li>
          <Link to="/OrderSection" className="nav-link text-black" >
            Orders
          </Link>
        </li>
        <li>
          <Link to="/CustomerSection" className="nav-link text-black" >
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
