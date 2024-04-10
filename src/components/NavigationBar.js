// NavigationBar.js

import React from 'react';

const NavigationBar = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="nav text-black py-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text">DRYTECH
        </div>
        <div className="flex">
          <button className="mx-2 font-bold btn-login" onClick={() => handleNavigation('inicio')}>
            Inicio
          </button>
          <button className="mx-2 btn-login" onClick={() => handleNavigation('informe')}>
            Informe
          </button>
          <button className="mx-2 btn-login" onClick={() => handleNavigation('cerrar-sesion')}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
