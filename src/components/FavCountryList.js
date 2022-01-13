import CountryContainer from "../containers/CountryContainer"
import FavCountry from "./FavCountry"

const FavCountryList = ({countries, onFavRemoveClick}) => {
    const favCountryNodes = countries.map((country, index) => {
        return <FavCountry country={country} key={index} onFavRemoveClick = {onFavRemoveClick}/>
    })


    return (
        <>
        <table>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Population</th>
            </tr>
            {favCountryNodes}
        </table>
        </>
        
    )
}

export default FavCountryList;