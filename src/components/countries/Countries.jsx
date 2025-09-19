import React, { use, useState } from 'react';
import Country from '../Country/Country';


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('handle visited', country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        // console.log('flag need to be added', flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <>
        <div className='flex justify-center mb-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>In World All Countries: {countries.length}</h1>
        </div>
        <div className='flex justify-center mb-4'>
            <h2 className='text-2xl font-semibold'>Total Country Visited: {visitedCountries.length}</h2>
        </div>
        <div className='flex justify-center mb-4'>
            <ol>
                {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
            </ol>
        </div>
        <div className='flex justify-center mb-20 items-center'>
            <h2 className='text-2xl font-semibold'>Total Visited Flags: {visitedFlags.length}</h2>

            {
                visitedFlags.map((flag, index) => <img key={index} src={flag} className='w-14 h-8 ml-4'></img>)
            }
        </div>
        <div className='md:grid grid-cols-4'>
            {
                countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
        </div>
        </>
        
    );
};

export default Countries;