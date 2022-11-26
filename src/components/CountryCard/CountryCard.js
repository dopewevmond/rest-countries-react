import './CountryCard.css'

const CountryCard = ({ flag, name, population, region, capital }) => (
  <div className='country-card'>
    <div className='country-card-flag-container'>
      <img src={flag} alt={'flag of ' + name} className="country-card-flag-img" />
    </div>
    <div className='country-card-details-container'>
      <h3>{name}</h3>
      <p><strong>Population: </strong>{population}</p>
      <p><strong>Region: </strong>{region}</p>
      <p><strong>Capital: </strong>{capital}</p>
    </div>
  </div>
)

export default CountryCard