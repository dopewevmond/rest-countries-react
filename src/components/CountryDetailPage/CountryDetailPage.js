import './CountryDetailPage.css'
import ThemeContext from '../../helpers/Theme'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NeighborCountry from '../NeighborCountry/NeighborCountry'
import Loading from '../Loading/Loading'
import ErrorPage from '../ErrorPage/ErrorPage'

const CountryDetailPage = () => {
  const { countryCode } = useParams()
  const [countryDetails, setCountryDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true)
      const countryDetailsResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      const countryDetails = await countryDetailsResponse.json()
      return countryDetails[0]
    }
    fetchCountryDetails()
      .then((cd) => {
        setCountryDetails({
          name: cd.name.common,
          nativeName: cd.name.official,
          population: cd.population,
          region: cd.region,
          subregion: cd.subregion || 'N/A',
          capital: (cd.capital && cd.capital[0]) || 'N/A',
          tld: (cd.tld && cd.tld[0]) || 'N/A',
          currencies: cd.currencies || [],
          languages: (cd.languages && Object.keys(cd.languages).map((lang) => cd.languages[lang])) || [],
          borderCountries: cd.borders || [],
          flag: (cd.flags && cd.flags.png) || 'N/A'
        })
        setError(false)
      })
      .catch((error) => {
        console.error(error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode])

  return (
    <ThemeContext.Consumer>
      {/* eslint-disable-next-line no-unused-vars */}
      {({ theme, toggleTheme }) => (
        <div className={theme == 'light' ?
                      'countries-bg-light full-height' : 
                      'countries-bg-dark full-height'}
        >
          {loading === false ?
          (
            <>
            {
              error === false ? (
                <div className='container pt-1'>
                  <div className='mb-3'>
                    <span className={theme == 'light' ? 
                                'navbar-bg-light' : 
                                'navbar-bg-dark'}
                    >
                      <Link to='/' className='country-detail-back-btn'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M0.548956 10.4278H19.4286C19.671 10.4278 19.8677 10.2311 19.8677 9.98878C19.8677 9.74641 19.671 9.54971 19.4286 9.54971H0.548956C0.306594 9.54971 0.109894 9.74641 0.109894 9.98878C0.109894 10.2311 0.306594 10.4278 0.548956 10.4278Z"
                          fill={theme == 'light' ? 
                              'black' :
                              'white'}
                          style={{transition: 'fill 300ms linear'}}
                        />
                        <path 
                          d="M3.54051 13.4194C3.65291 13.4194 3.76509 13.3766 3.85093 13.2908C4.02238 13.1193 4.02238 12.8414 3.85093 12.6699L1.16979 9.98878L3.85093 7.30787C4.02238 7.13641 4.02238 6.85849 3.85093 6.68703C3.67947 6.51558 3.40155 6.51558 3.23009 6.68703L0.238539 9.67836C0.156215 9.76069 0.109894 9.87243 0.109894 9.98878C0.109894 10.1051 0.156215 10.2169 0.238539 10.2992L3.23009 13.2908C3.31593 13.3766 3.42811 13.4194 3.54051 13.4194Z"
                          fill={theme == 'light' ? 
                          'black' :
                          'white'}
                          style={{transition: 'fill 300ms linear'}}
                        />
                      </svg>

                        <span>&nbsp;&nbsp;Back</span>
                      </Link>
                    </span>
                  </div>
                  
                  <div className='flex-2-cols'>
                    <div className='country-detail-img-container flex-child-small'>
                      <img src={countryDetails.flag} alt='country flag' className=''/>
                    </div>

                    <div className='country-detail-details-container flex-child-large'>
                      <div className='country-detail-big-text mb-1 sm-pt-1'><strong>{countryDetails.name}</strong></div>
                      <div className='flex-2-cols align-items-start country-detail-small-text mb-1'>
                        <div className='sm-mb-1'>
                          <div className='mb-half'><strong>Native name: </strong>{countryDetails.nativeName}</div>
                          <div className='mb-half'><strong>Population: </strong>{countryDetails.population}</div>
                          <div className='mb-half'><strong>Region: </strong>{countryDetails.region}</div>
                          <div className='mb-half'><strong>Sub-region: </strong>{countryDetails.subregion}</div>
                          <div className='mb-half'><strong>Capital: </strong>{countryDetails.capital}</div>
                        </div>
                        <div className='sm-mb-1'>
                          <div className='mb-half'><strong>Top Level Domain: </strong>{countryDetails.tld}</div>
                          <div className='mb-half'><strong>Currencies: </strong>{Object.keys(countryDetails.currencies).map((currency, idx) => (<span key={idx}>{countryDetails.currencies[currency].name}</span>))}</div>
                          <div className='mb-half'><strong>Languages: </strong>{countryDetails.languages && countryDetails.languages.map((lang, key) => (<span key={key}>{lang}, </span>))}</div>
                        </div>
                      </div>
                      {/* end of flex column */}

                      <div className='country-detail-small-text sm-pb-4'>
                      <div className='mb-half country-detail-flex-colmobile-rowtab'>
                        <span className='mr-1 mb-1'><strong>Border countries:</strong></span>
                        <div className='border-countries-container sm-mt-1'>
                          {
                            countryDetails.borderCountries && countryDetails.borderCountries.map((border, idx) => (
                              <Link to={'/code/' + border.toLowerCase()} key={idx} className='link-no-decoration'>
                                <NeighborCountry name={border} />
                              </Link>
                            ))
                          }
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <ErrorPage message='Check your network and the country code, and try again' />
              )
            }
            </>
          ) : 
          (
            <Loading />
          )
          }
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default CountryDetailPage
