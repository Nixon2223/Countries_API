import React, {useState} from 'react';

const CountryDetails = ({country}) => {

    // const[countryNeighbours, setCountryNeighbours] = useState([])


    // const findNeighbours = function(country) {
    //     const neighbours = country["borders"];
    // }

    // const getCountries = function(findNeighbours()){
    //     for (neighbour of neighbours){
    //         let request = fetch(`https://restcountries.com/v3.1/${neighbour}`)
    //         .then(Response => Response.json())
    //         .then(newNeighbours => setCountryNeighbours(newNeighbours));
    //     }
    // }

    return(
        <>
        <h3>{country["name"].common}</h3>
        <p>Region: {country["region"]}</p>
        <p>Official Name: {country["name"].official}</p>
        </>
    )
}


export default CountryDetails;