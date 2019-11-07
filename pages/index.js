import React from 'react'
import Airport from '../components/Airport'
import Nav from '../components/Nav'
import Head from '../components/Head'
const axios = require('axios');
import { useState, useEffect } from 'react';


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(getAirportData, []);
  function getAirportData() {
    axios.get('https://api.qantas.com/flight/refData/airport')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        setLoading(false);
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  return (
    <div>
      <Head />

      <style jsx>{`
      `}</style>

      <Nav />
      {data == [] ? <div>Loading Airports...</div> : <Airport />}

      {/* <div>{data.map((airport, index) => <div key={index}>{JSON.stringify(airport)}</div>)}</div> */}
    </div>
  )
}

export default Home
