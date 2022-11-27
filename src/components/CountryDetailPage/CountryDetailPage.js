import './CountryDetailPage.css'
import ThemeContext from '../../helpers/Theme'
import { Link } from 'react-router-dom'

const CountryDetailPage = () => (
  <ThemeContext.Consumer>
    {/* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <div className={theme == 'light' ?
                    'countries-bg-light full-height' : 
                    'countries-bg-dark full-height'}
      >
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
              <img src='https://flagcdn.com/w320/mr.png' alt='country flag' className=''/>
            </div>

            <div className='country-detail-details-container flex-child-large'>
              <div className='country-detail-big-text mb-1 sm-pt-1'><strong>Mauritania</strong></div>
              <div className='flex-2-cols align-items-start country-detail-small-text mb-1'>
                <div className='sm-mb-1'>
                  <div className='mb-half'><strong>Native name: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Population: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Region: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Sub-region: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Capital: </strong>Mauritania</div>
                </div>
                <div className='sm-mb-1'>
                  <div className='mb-half'><strong>Top Level Domain: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Currencies: </strong>Mauritania</div>
                  <div className='mb-half'><strong>Languages: </strong>Mauritania</div>
                </div>
              </div>
              {/* end of flex column */}

              <div className='country-detail-small-text sm-pb-4'>
              <div className='mb-half country-detail-flex-colmobile-rowtab'>
                <span className='mr-1'><strong>Border countries:</strong></span>
                <div className='border-countries-container sm-mt-1'>
                  {
                    ['Ghana', 'Togo', 'Ivory Coast'].map((country, idx) => (
                      <span className=
                        {theme == 'light' ?
                          'navbar-bg-light country-detail-bordercountry-box mr-half' :
                          'navbar-bg-dark country-detail-bordercountry-box mr-half'}
                        key={idx}
                      >
                        {country}
                      </span>
                    ))
                  }
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default CountryDetailPage
