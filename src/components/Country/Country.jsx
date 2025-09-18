import React from 'react';

const Country = ({country}) => {
    console.log(country)

    const handleVisited = () => {
        console.log('Visit more...')
    }
    
    return (
        <div className='p-4 m-4 border-2 border-amber-500 rounded-xl'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h2>Official Name: {country.name.official}</h2>
            <h3>Capital: {country.capital.capital}</h3>
            {/* <h3>Languages: {country.languages.languages}</h3> */}
            <p>Population: {country.population.population}</p>

            <button onClick={handleVisited}>Explore More</button>
        </div>
    );
};

export default Country;