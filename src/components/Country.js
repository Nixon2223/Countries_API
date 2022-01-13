import React from 'react';



const Country = ({country, onFavClick, onCountryClick}) => {
    
    const handleClick = function() {
        onCountryClick(country)
    }
    
    const handleFavClick = function() {
        onFavClick(country)
    }
    return (
        <>
            <tr>
            <td>{country.flag}</td>
            <td onClick={handleClick}>{country["name"].common}</td>
            <td>{country["population"].toLocaleString()}</td>
            <p onClick={handleFavClick}>&#9825;</p>
            </tr>
        </>
    )
}

export default Country;