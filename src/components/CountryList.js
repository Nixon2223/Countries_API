import React from 'react'
import Country from './Country'

const CountryList = ({countries}) => {
    const countryNodes = countries.map((country, index) => {
        return <Country country = {country} key = {index}/>
    })
}

return (
    <table>
        <tr>
            <th>Name</th>
        </tr>
    </table>
)



export default CountryList;