import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false);
    // console.log(country)
    console.log(handleVisitedCountries);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    return (
        <div className={`md:px-4 m-4 p-4  border-2 border-amber-500 rounded-xl bg-amber-100 ${visited ? 'bg-amber-300' : 'bg-white'}`}>
            <img className='w-full md:w-60 md:h-30 mb-4' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h2>Official Name: {country.name.official}</h2>
            <h3>Capital: {country.capital.capital}</h3>
            {/* <h3>Languages: {country.languages.languages}</h3> */}
            <p>Population: {country.population.population}</p>

            <button className='mt-4 px-4 py-2 bg-lime-400 border-none rounded cursor-pointer' onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button className='mt-4 px-4 py-2 bg-lime-400 border-none rounded cursor-pointer ml-2' onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Add flag</button>
        </div>
    );
};

export default Country;