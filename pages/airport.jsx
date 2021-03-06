import React from 'react';
import AirportDetailsCard from '../components/AirportDetailsCard';
import Nav from '../components/Nav';
import Head from '../components/Head';
import { useState, useEffect } from 'react';
import { getAirportData } from '../services/api';


const Airport = (param) => {

    const airportCode = param.url.query.airportCode;

    const [loading, setLoading] = useState(true);
    const [showError, setShowError] = useState(false);
    const [data, setData] = useState([]);

    const initialise = () => {
        getAirportData()
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                setShowError(true);
            })
            .finally(function (error) {
                setLoading(false);
            });
    }

    useEffect(initialise, []);

    return (
        <div >
            <Head />
            <Nav />

            {loading && <p className="h4 text-center">Loading Details...</p>}
            {showError && <p className="h4 text-center">Server Down. Please try again later</p>}

            <div className="row  m-3">
                {
                    data
                        .filter((airport) => airport.airportCode == airportCode)
                        .map((airport, index) => <div className="col-lg-4 col-md-6 mt-3" key={index}>{
                            <AirportDetailsCard airport={airport} />
                        }</div>)
                }
            </div>

        </div>
    )
}

export default Airport
