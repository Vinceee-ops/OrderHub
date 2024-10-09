import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './remoteRoute/remoteRoute'; 
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path } = route; 
            return (
              <Route key={index} path={path} element={element} /> 
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

