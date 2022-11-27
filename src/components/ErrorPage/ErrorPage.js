import './ErrorPage.css'
import ThemeContext from "../../helpers/Theme"
import { Link } from 'react-router-dom'

const ErrorPage = () => (
  <ThemeContext.Consumer>
    {/* eslint-disable-next-line no-unused-vars */}
    {({ theme, toggleTheme }) => (
      <div className={theme == 'light' ?
                    'countries-bg-light full-height' :
                    'countries-bg-dark full-height'}
      >
        <div className="container">
          <div className="errorpage-flex-parent errorpage-pt-md">
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
              >
                <path
                  style={{transition: 'fill 300ms linear'}}
                  fill={theme == 'light' ?
                        '#000' :
                        '#fff'
                      }
                  strokeMiterlimit="10"
                  strokeWidth="0"
                  d="M85.429 85.078H4.571a5.014 5.014 0 01-4.387-2.533 5.011 5.011 0 010-5.065L40.613 7.455A5.015 5.015 0 0145 4.922c1.832 0 3.471.947 4.386 2.533L89.815 77.48a5.014 5.014 0 01.001 5.065 5.013 5.013 0 01-4.387 2.533zM45 7.922c-.747 0-1.416.386-1.79 1.033L2.782 78.979a2.045 2.045 0 000 2.065 2.045 2.045 0 001.789 1.033h80.858c.747 0 1.416-.387 1.789-1.033s.373-1.419 0-2.065L46.789 8.955A2.044 2.044 0 0045 7.922zm0 67.403c-4.105 0-7.446-3.34-7.446-7.445s3.34-7.445 7.446-7.445 7.445 3.34 7.445 7.445-3.339 7.445-7.445 7.445zm0-11.89c-2.451 0-4.446 1.994-4.446 4.445s1.995 4.445 4.446 4.445 4.445-1.994 4.445-4.445-1.994-4.445-4.445-4.445zm0-6.289a6.89 6.89 0 01-6.882-6.882V34.121A6.89 6.89 0 0145 27.239a6.89 6.89 0 016.881 6.882v16.144A6.888 6.888 0 0145 57.146zm0-26.907a3.886 3.886 0 00-3.882 3.882v16.144A3.886 3.886 0 0045 54.147a3.886 3.886 0 003.881-3.882V34.121A3.886 3.886 0 0045 30.239z"
                  transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                >
                </path>
              </svg>
            </div>

            <div className="errormessage-container">
              Oops...An error occurred. Click <Link to='/' className='undecorated-link'>here</Link> to go back to the homepage.
            </div>
          </div>  
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default ErrorPage