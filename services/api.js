const axios = require('axios');

export const getAirportData = () => {
    return axios.get('https://api.qantas.com/flight/refData/airport');
}

