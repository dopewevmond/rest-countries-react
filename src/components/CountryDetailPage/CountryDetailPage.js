import './CountryDetailPage.css'
import ThemeContext from '../../helpers/Theme'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NeighborCountry from '../NeighborCountry/NeighborCountry'
import Loading from '../Loading/Loading'

const CountryDetailPage = () => {
  const { countryName, countryCode } = useParams()
  const [countryDetails, setCountryDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true)
      let countryDetailsResponse
      if (countryName) {
        countryDetailsResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)  
      } else if (countryCode) {
        countryDetailsResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      }
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
          languages: (cd.languages && cd.languages.eng) || 'N/A',
          borderCountries: cd.borders || [],
          flag: (cd.flags && cd.flags.png) || 'N/A'
        })
      })
      .catch((error) => {
        console.error(error)
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
            <div className='container pt-1'>
              <div className='mb-3'>
                <span className={theme == 'light' ? 
                            'navbar-bg-light' : 
                            'navbar-bg-dark'}
                >
                  <Link to='/' className='country-detail-back-btn'>Back</Link>
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
                      <div className='mb-half'><strong>Languages: </strong>{countryDetails.languages}</div>
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
