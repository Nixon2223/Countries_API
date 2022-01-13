import React from 'react';



const Country = ({country}) => {
    return (
        <>
            <tr>
            <td>{country.flag}</td>
            <td>{country["name"].common}</td>
            <td>{country["population"].toLocaleString()}</td>
            </tr>
        </>
    )
}

export default Country;