// all css for this is written in country detail page css file
import ThemeContext from "../../helpers/Theme"

const NeighborCountry = (props) => (
  <ThemeContext.Consumer>
    {/* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <span className=
        {theme == 'light' ?
          'navbar-bg-light country-detail-bordercountry-box mr-half' :
          'navbar-bg-dark country-detail-bordercountry-box mr-half'}
      >
        {props.name}
      </span>
    )}
  </ThemeContext.Consumer>  
)

export default NeighborCountry