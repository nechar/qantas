import React from 'react'
import Airport from '../components/Airport'
import Nav from '../components/Nav'
import Head from '../components/Head'
const axios = require('axios');
import { useState, useEffect } from 'react';


const Home = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(getAirportData, []);

  function getAirportData() {
    axios.get('https://api.qantas.com/flight/refData/airport')
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  return (
    <div>
      <Head />
      <Nav />

      {loading && <div>Loading Airports...</div>}

      <div className="row">
        {data.slice(0, 20).map((airport, index) => <div className="col-lg-4 col-md-6" key={index}>{<Airport airport={airport} />}</div>)}
      </div>

    </div>
  )
}

export default Home
