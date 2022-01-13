import React from 'react'
import Country from './Country'
import './CountryList.css'

const CountryList = ({countries}) => {
    const countryNodes = countries.map((country, index) => {
        return <Country country = {country} key = {index} favourite = {false}/>
    })


return (
    <>
    <table>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Population</th>
        </tr>
        {countryNodes}
    </table>
    </>
    
)
}


export default CountryList;