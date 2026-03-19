import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <p>Visited Countries Total: {visitedCountries.length}</p>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}
                    handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
}

export default Countries