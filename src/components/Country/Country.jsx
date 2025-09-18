import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h2>Official Name: {country.name.official}</h2>
            <h3>Capital: {country.capital.capital}</h3>
            {/* <h3>Languages: {country.languages.languages}</h3> */}
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;