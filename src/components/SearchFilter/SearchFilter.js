import './SearchFilter.css'
import ThemeContext from "../../helpers/Theme"

const SearchFilter = ({ countryQuery, setCountryQuery, regionQuery, setRegionQuery }) => (
  <ThemeContext.Consumer>
    {/* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <div className='searchfilter-flex-container pt-1 pb-1'>
        <div className={theme == 'light' ?
                      'navbar-bg-light searchfilter-searchbox-container' :
                      'navbar-bg-dark searchfilter-searchbox-container'}
        >
          <input
            className='input-no-styles'
            type="text"
            placeholder='Search for a country...'
            value={countryQuery}
            onChange={e => { setCountryQuery(e.target.value) }}
          />
        </div>

        <span className={theme == 'light' ?
                      'navbar-bg-light searchfilter-filterbox-container' :
                      'navbar-bg-dark searchfilter-filterbox-container'}
        >
          <select
            name='region'
            className='input-no-styles'
            value={regionQuery}
            onChange={e => { setRegionQuery(e.target.value) }}
          >
            <option value=''>All Regions</option>
            <option value='africa'>Africa</option>
            <option value='americas'>Americas</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </span>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default SearchFilter