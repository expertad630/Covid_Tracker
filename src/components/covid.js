import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {


    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        getCovidData();
    }, []);




    return (
        <section className="banner">
            <div className="zoom-in-zoom-out">
            <h1>🔴 Live</h1>
            </div>
            <h2>COVID-19 TRACKER</h2>
            <section className="sub-banner">
                <div className="row">
                    <div className="col country">
                        <h4 className="close"><span>OUR</span> COUNTRY</h4>
                        <p className="glow">INDIA</p>
                    </div>
                    <div className="col recovered">
                        <h4 className="close"><span>TOTAL</span> RECOVERED</h4>
                        <p className="glow">{ data.recovered }</p>
                    </div>
                    <div className="col confirm">
                        <h4 className="close"><span>TOTAL</span> COFIRMED</h4>
                        <p className="glow">{ data.confirmed }</p>
                    </div>

                </div>
                <div className="row">
                    <div className="col deaths">
                        <h4 className="close"><span>TOTAL</span> DEATHS</h4>
                        <p className="glow">{ data.deaths }</p>
                    </div>
                    <div className="col active">
                        <h4 className="close"><span>TOTAL</span> ACTIVE</h4>
                        <p className="glow">{ data.active }</p>
                    </div>
                    <div className="col ">
                        <h4 className="close"><span>LAST</span> UPDATED</h4>
                        <p className="glow">{ data.lastupdatedtime }</p>
                    </div>
                </div>
            </section>
            <section className="footer">
                <h1>Live Update On COVID-19 Corona Virus in India</h1>
                <p>Designed and Devloped By @expertad630</p>
            </section>
        </section>
    )
}

export default Covid