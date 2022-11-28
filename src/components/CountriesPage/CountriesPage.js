import './CountriesPage.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from "../../helpers/Theme"
import CountryCard from "../CountryCard/CountryCard"
import Loading from '../Loading/Loading'
import ErrorPage from '../ErrorPage/ErrorPage'
import SearchFilter from '../SearchFilter/SearchFilter'

const CountriesPage = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const neededFieldsCountries = []
      const countriesResponse = await fetch('https://restcountries.com/v3.1/all')
      const countriesJson = await countriesResponse.json()
      for (let country of countriesJson) {
        neededFieldsCountries.push({
          flag: country.flags.png,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: (country.capital && country.capital[0]) || 'No capital',
          countryCode: country.cca3
        })
      }
      return neededFieldsCountries
    }
    getCountries()
      .then((neededFieldsCountries) => {
        setCountries(neededFieldsCountries)
        setError(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
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
            {
              loading === false ? (
                <>
                {
                  error === false ? (
                    <div className="container">
                      <SearchFilter />
                    <div className="flex-4-cols pt-1">
                      {
                        countries.map(({ flag, name, population, region, capital, countryCode }) => (
                          <Link to={'/code/' + countryCode.toLowerCase() } key={name} className='link-no-decoration'>
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
                  ): (
                    <ErrorPage />
                  )
                }
                </>
              ) : (
                <Loading />
              )
            }  
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default CountriesPage