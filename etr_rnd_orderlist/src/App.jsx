import React from 'react';
import RemoteRoutes from "./remoteRoute/remoteRoute";
import {BrowserRouter} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RemoteRoutes />      
      </BrowserRouter>
    </div>
  );
}

export default App;