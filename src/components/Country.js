import React from 'react';



const Country = ({country, onFavClick, onCountryClick, favouriteCountries, isFavouriteCountry}) => {
    
    const handleClick = function() {
        onCountryClick(country)
    }
    
    const handleFavClick = function() {
        onFavClick(country)
    }

    const handleIsFavouriteCountry = function() {
        isFavouriteCountry(country)
    }

    return (
        <>
            <tr>
            <td>{country.flag}</td>
            <td onClick={handleClick}>{country["name"].common}</td>
            <td>{country["population"].toLocaleString()}</td>
            <p onClick={handleFavClick} style={{color: {handleIsFavouriteCountry}}} >&#9825;</p>
            </tr>
        </>
    )
}

export default Country;