import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    /* const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries) */


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <>
        <div className='flex justify-center mb-20'>
            <h1 className='text-4xl font-semibold'>In World All Countries: {countries.length}</h1>
        </div>
        <div className='grid grid-cols-4'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
        </>
        
    );
};

export default Countries;