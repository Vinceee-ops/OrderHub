import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './remoteRoute/remoteRoute'; 
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-primary bg-light">
            <Header />
          </nav>
          <div className="d-flex flex-row flex-grow-1">
            <Sidebar />
            <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
              <Routes>
                {AppRoutes.map((route, index) => {
                  const { element, path } = route; 
                  return (
                    <Route key={index} path={path} element={element} /> 
                  );
                })}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
