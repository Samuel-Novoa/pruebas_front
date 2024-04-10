export function getFieldLabel(fieldName) {
    switch (fieldName) {
        case 'humidity':
            return 'Entrada de la humedad del producto';
        case 'temperatureIn':
            return 'Entrada de la temperatura del producto';
        case 'temperatureOut':
            return 'Salida de la temperatura del producto';
        case 'humidityOut':
            return 'Salida de la humedad del producto';
        case 'massFlow':
            return 'Flujo másico del producto';
        case 'specificHeat':
            return 'Calor específico del trigo';
        default:
            return '';
    }
}

export function getFieldPlaceholder(fieldName) {
    switch (fieldName) {
        case 'humidity':
            return 'la humedad';
        case 'temperatureIn':
        case 'temperatureOut':
            return 'la temperatura';
        case 'humidityOut':
            return 'la humedad';
        case 'massFlow':
            return 'el flujo';
        case 'specificHeat':
            return 'el calor';
        default:
            return '';
    }
}

export function getFieldUnit(fieldName) {
    switch (fieldName) {
        case 'humidity':
            return '(Kg)';
        case 'temperatureIn':
        case 'temperatureOut':
            return '(K)';
        case 'humidityOut':
            return '(%)';
        case 'massFlow':
            return '(%)';
        case 'specificHeat':
            return '(kJ/Kg*K)';
        default:
            return '';
    }
}
