import { useState } from 'react';

export function useFormState() {
    const initialState = {
        humidity: '',
        temperatureIn: '',
        temperatureOut: '',
        humidityOut: '',
        massFlow: '',
        specificHeat: ''
    };

    const [formData, setFormData] = useState(initialState);
    const [emptyFields, setEmptyFields] = useState({
        humidity: false,
        temperatureIn: false,
        temperatureOut: false,
        humidityOut: false,
        massFlow: false,
        specificHeat: false
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value
        });
        if (emptyFields[fieldName] && value !== '') {
            setEmptyFields({
                ...emptyFields,
                [fieldName]: false
            });
        }
    };

    const handleCalculate = () => {
        let areEmptyFields = false;
        const updatedEmptyFields = {};
        Object.keys(formData).forEach(field => {
            if (formData[field] === '') {
                updatedEmptyFields[field] = true;
                areEmptyFields = true;
            } else {
                updatedEmptyFields[field] = false;
            }
        });
        setEmptyFields(updatedEmptyFields);

        if (areEmptyFields) {
            return;
        }

        setShowAlert(true);
        resetForm(); // Reiniciar el formulario después de calcular los datos
    };

    const resetForm = () => {
        setFormData(initialState);
        setEmptyFields({
            humidity: false,
            temperatureIn: false,
            temperatureOut: false,
            humidityOut: false,
            massFlow: false,
            specificHeat: false
        });
    };

    return { formData, emptyFields, showAlert, setShowAlert, handleInputChange, handleCalculate };

}
