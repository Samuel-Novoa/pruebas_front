import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginClick = () => {
    setCurrentPage('form');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {currentPage === 'login' && (
        <div className="text-center">
          <button onClick={handleLoginClick} className="btn-login">
            Ingresar
          </button>
        </div>
      )}
      {currentPage === 'form' && <Form />}
    </div>
  );
}

export default App;
