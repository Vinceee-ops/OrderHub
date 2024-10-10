import React from 'react';
import { useNavigate } from "react-router-dom";

const TestSection = () => {
  const navigate = useNavigate()

  const handleGoback = () => {
    navigate('/OrderSection')
  }
  const handleRoute = () => {
    navigate('/CustomerSection')
  }
  return (
    <>
      <div className="container home mt-5 mb-5 ">
        <button onClick={handleGoback} className='col-2 button'>
          Back
        </button>
        <div className="row justify-content-center align-items-center">
          <div className="col-2">
              Test Section
          </div>
        </div>
        <button onClick={handleRoute} className='col-2 button'>
          Go to Customers
        </button>
      </div>
    </>


  );
};

export default TestSection;
