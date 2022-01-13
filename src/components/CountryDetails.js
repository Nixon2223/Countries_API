const CountryDetails = ({country}) => {
    return(
        <>
        <h3>{country["name"].common}</h3>
        <p>Region: {country["region"]}</p>
        <p>Official Name: {country["name"].official}</p>
        </>
    )
}


export default CountryDetails;