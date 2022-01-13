import React, {useState, useEffect} from "react";
import CountryList from '../components/CountryList'
import CountryDetails from "../components/CountryDetails";
import FavCountryList from "../components/FavCountryList";


const CountryContainer = () => {
    const[countries, setCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] = useState(null);
    const[favouriteCountries, setFavouriteCountries] = useState([])


    useEffect(() => {
        getCountries()
    }, []);



    const getCountries = function(){
        const request = fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(countries => setCountries(countries));
    }

    const onCountryClick = function(country) {
        setSelectedCountry(country)
    }

    const onFavClick = function(country) {
        addFavCountry(country)
    }

    const onFavRemoveClick = function(country) {
        setFavouriteCountries(removeFavCountry(country))
    }

    const removeFavCountry = function(country) {
        favouriteCountries.splice(country, 1);
        return (favouriteCountries);
    }
    
    const addFavCountry = function(country) {
        if (favouriteCountries.includes(country) === false){
        const updatedFavCountries = [...favouriteCountries, country]
        setFavouriteCountries(updatedFavCountries)
        }
    }

    return (
        <>
        <div className ="main-container">
            <CountryList countries = {countries} onCountryClick={onCountryClick} onFavClick = {onFavClick} />
        </div>
        <div>
            {selectedCountry ? <CountryDetails country={selectedCountry} /> : null}
        </div>
        <div className ="fav-container">
            <FavCountryList countries={favouriteCountries} onFavRemoveClick ={onFavRemoveClick}/>
        </div>
        </>
    ) 
}

export default CountryContainer;