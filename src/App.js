import React, { useState } from 'react';
import Form from './components/Form';
import Simulador from './components/Simulador';
import NavigationBar from './components/NavigationBar';


function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginClick = () => {
    setCurrentPage('form');
  };

  return (
    <div>
      {currentPage === 'login' && (
        // <div className="text-center">
        //   <button onClick={handleLoginClick} className="btn-login">
        //     Ingresar
        //   </button>
        // </div>
        <>
          <NavigationBar setCurrentPage={setCurrentPage} />
          <Simulador />
        </>
      )}
      {currentPage === 'form' && <Form />}
      {/* <Simulador/> */}
    </div>
  );
}

export default App;
