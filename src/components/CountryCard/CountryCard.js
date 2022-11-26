import './CountryCard.css'
import ThemeContext from '../../helpers/Theme'

const CountryCard = ({ flag, name, population, region, capital }) => (
  <ThemeContext.Consumer>
    {/* the colors for the dark mode are the same as the navbar's so the same classes will be reused */}
    { /* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <div className={theme == 'light' ?
                    'navbar-bg-light mb-2':
                    'navbar-bg-dark mb-2'}
      >
        <div className='country-card'>
          <div className='country-card-flag-container'>
            <img src={flag} alt={'flag of ' + name} className="country-card-flag-img" />
          </div>
          <div className='country-card-details-container pl-1'>
            <h3>{name}</h3>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Capital: </strong>{capital}</p>
          </div>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default CountryCard