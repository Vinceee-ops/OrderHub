import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Main />
      </div>
    </BrowserRouter>
  );
}
export default App;
