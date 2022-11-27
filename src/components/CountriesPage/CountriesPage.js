import './CountriesPage.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from "../../helpers/Theme"
import CountryCard from "../CountryCard/CountryCard"

const CountriesPage = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const getCountries = async () => {
      const neededFieldsCountries = []
      const countriesResponse = await fetch('https://restcountries.com/v3.1/all')
      const countriesJson = await countriesResponse.json()
      for (let cntry of countriesJson) {
        neededFieldsCountries.push({
          flag: cntry.flags.png,
          name: cntry.name.common,
          population: cntry.population,
          region: cntry.region,
          capital: (cntry.capital && cntry.capital[0]) || 'No capital'
        })
      }
      return neededFieldsCountries
    }
    getCountries()
      .then((neededFieldsCountries) => {
        setCountries(neededFieldsCountries)
        console.log(countries)
      })
      .catch((err) => {
        console.error(err)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <ThemeContext.Consumer>
      {
        // eslint-disable-next-line no-unused-vars
        ({ theme, toggleTheme }) => (
          <div className={ theme == 'light' ?
                        'countries-bg-light full-height':
                        'countries-bg-dark full-height'}
          >
            <div className="container">
              <div className="flex-4-cols pt-1">
                {
                  countries.map(({ flag, name, population, region, capital }) => (
                    <Link to={'/' + name.toLowerCase() } key={name} className='link-no-decoration'>
                      <CountryCard
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                      />
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default CountriesPage