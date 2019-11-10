import React from 'react'
import AirportCard from '../components/AirportCard'
import Nav from '../components/Nav'
import Head from '../components/Head'
import { useState, useEffect } from 'react';
import { getAirportData } from '../services/api';


const Home = () => {

  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);

  const init = () => {
    getAirportData()
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setShowError(true);
      })
      .finally(function (error) {
        setLoading(false);
      });
  }

  useEffect(init, []);


  return (
    <div>
      <Head />
      <Nav />

      {loading && <p className="h4 text-center">Loading Airports...</p>}
      {showError && <p className="h4 text-center">Server Down. Please try again later</p>}

      <div className="row m-3">
        {
          data.slice(0, 20).map((airport, index) => <div className="col-lg-4 col-md-6 mt-3" key={index}>
            {<AirportCard airport={airport} />}
          </div>)}
      </div>

    </div>
  )
}

export default Home
