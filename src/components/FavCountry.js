import React from 'react';

const FavCountry = ({country, onFavRemoveClick}) => {

    const handleFavRemoveClick = function() {
        onFavRemoveClick(country)
    }

    return (
        <>
            <tr>
                <td>{country.flag}</td>
                <td>{country["name"].common}</td>
                <td>{country["population"].toLocaleString()}</td>
                <p onClick={handleFavRemoveClick}>&#10006;</p>
            </tr>
        </>
    )
}

export default FavCountry;