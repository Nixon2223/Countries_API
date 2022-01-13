import React from 'react'
import Country from './Country'
import './CountryList.css'

const CountryList = ({countries, onCountryClick, onFavClick, favouriteCountries, isFavouriteCountry}) => {
    const countryNodes = countries.map((country, index) => {
        return <Country country = {country} key = {index} favouriteCountries = {favouriteCountries} onCountryClick={onCountryClick} onFavClick = {onFavClick} isFavouriteCountry = {isFavouriteCountry}/>
    })


return (
    <>
    <h2>Countries</h2>
    <table>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Population</th>
            <th></th>
        </tr>
        {countryNodes}
    </table>
    </>
    
)
}


export default CountryList;