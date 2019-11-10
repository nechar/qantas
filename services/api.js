const axios = require('axios');

exports.getAirportData = () => {
    return axios.get('https://api.qantas.com/flight/refData/airport');
}
