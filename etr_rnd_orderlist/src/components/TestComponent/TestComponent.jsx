import React from 'react';
// import { useNavigate } from "react-router-dom";

const TestSection = () => {
  // const navigate = useNavigate()

  // const handleGoback = () => {
  //   navigate('/')
  // }
  return (
    <>
      <div className="container home mt-5 mb-5 ">
        <button className='col-2 button'>
          Back
        </button>
        <div className="row justify-content-center align-items-center">
          <div className="col-2">
              Test Section
          </div>
        </div>
      </div>
    </>


  );
};

export default TestSection;
