// ContainerSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSection = () => {
  return (
    <div className="flex-grow-1 bg-light d-flex align-items-center justify-content-center">
      <div className="bg-white border rounded" style={{ width: '100%', maxWidth: '600px', height: '400px' }}>
        <h4 className="text-center" style={{ paddingTop: '180px' }}>
          Order Section
        </h4>
      </div>
    </div>
  );
};

export default OrderSection;
