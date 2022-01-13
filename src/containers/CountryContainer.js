import React, {useState, useEffect} from "react";
import CountryList from '../components/CountryList'


const CountryContainer = () => {
    const[countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries()
    }, [])



    const getCountries = function(){
        const request = fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(countries => setCountries(countries));
        console.log(request)
    }

    return (
        <div className ="main-container">
            <CountryList countries = {countries}/>
        </div>
    ) 
}

export default CountryContainer;