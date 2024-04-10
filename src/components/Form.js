// Form.js

import React, { useState } from 'react';
import { getFieldLabel, getFieldPlaceholder, getFieldUnit } from './FormUtils';
import { useFormState } from './FormDataUtils';
import NavigationBar from './NavigationBar';

const Form = () => {
  const { formData, emptyFields, showAlert, handleInputChange, handleCalculate, setShowAlert } = useFormState();
  const [currentPage, setCurrentPage] = useState('inicio');

  return (
    <div className='container'>
      {currentPage === 'inicio' && (
        <>
          <NavigationBar setCurrentPage={setCurrentPage} />
          
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full'>
            <h1 className='text-4xl font-semibold mb-8 text-trigo'>Ingresar Datos </h1>

            <div className='grid grid-cols-3 gap-8'>
              {Object.entries(formData).map(([fieldName, value]) => (
                <div key={fieldName}>
                  <label className='block font-semibold mb-2 text-trigo'>{getFieldLabel(fieldName)}</label>
                  <div className='flex items-center'>
                    <input
                      className={`w-full border ${emptyFields[fieldName] ? 'border-red-500' : 'border-gray-300'} rounded-lg py-3 px-4`}
                      placeholder={`Ingrese ${getFieldPlaceholder(fieldName)}`}
                      value={value}
                      onChange={e => handleInputChange(fieldName, e.target.value)}
                    />
                    <span className='ml-2 text-trigo'>{getFieldUnit(fieldName)}</span>
                  </div>
                  {emptyFields[fieldName] && <p className='text-red-600 text-sm mt-1'>Por favor, complete este campo.</p>}
                </div>
              ))}
            </div>

            <div className='mt-8 flex justify-center'>
              <button onClick={handleCalculate} className='px-8 py-4 bg-trigo text-white rounded-lg font-semibold bg-yellow-400'>Calcular</button>
            </div>

            {showAlert && (
              <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                <div className='bg-yellow-100 border border-yellow-400 text-yellow-800 px-8 py-5 rounded-lg relative' role='alert'>
                  <strong className='font-bold'>¡Datos calculados!</strong>
                  <button className="absolute top-0 right-5 px-2 py-1 -mr-4 text-yellow-800" onClick={() => setShowAlert(false)}>X</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Form;

