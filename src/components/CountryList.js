import React from 'react'
import Country from './Country'
import './CountryList.css'

const CountryList = ({countries, onCountryClick, onFavClick}) => {
    const countryNodes = countries.map((country, index) => {
        return <Country country = {country} key = {index} favourite = {false} onCountryClick={onCountryClick} onFavClick = {onFavClick}/>
    })


return (
    <>
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