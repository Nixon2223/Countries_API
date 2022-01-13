import React from 'react';



const Neighbour = ({neighbour}) => {
    

    return (
        <>
            <tr>
            <td>{Neighbour.flag}</td>
            <td onClick={handleClick}>{Neighbour["name"].common}</td>
            </tr>
        </>
    )
}

export default Neighbour;