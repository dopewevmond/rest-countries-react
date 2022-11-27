import './Loading.css'
import ThemeContext from '../../helpers/Theme'

const Loading = () => (
  <ThemeContext.Consumer>
    {/* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <div className={theme == 'light' ?
                      'countries-bg-light full-height loading-center' :
                      'countries-bg-dark full-height loading-center'}
      >
        <span className={theme == 'light' ?
                        'spinner-loader': 
                        'spinner-loader loading-white-spinner'}
        >
          Loading&#8230;
        </span>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default Loading