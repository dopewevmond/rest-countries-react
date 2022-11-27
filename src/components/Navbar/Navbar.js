import './Navbar.css'
import ThemeContext from '../../helpers/Theme'

const Navbar = () => (
  <ThemeContext.Consumer>
    {
      ({ theme, toggleTheme }) => (
        <div className={theme == 'light'?
                      'navbar-bg-light':
                      'navbar-bg-dark'}
      >
        <div className='container'>
          <div className='navbar-container pt-1 pb-1'>
            <div>
              <span className='logo'>Where in the world?</span>
            </div>
            <div>
              <button className='theme-toggler-btn flex-btn' onClick={toggleTheme}>
                {
                  theme == 'light' ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <g clipPath="url(#clip0_102_13)">
                          <path
                            fill="#000"
                            d="M19.39 13.435a.326.326 0 00-.372-.046 7.251 7.251 0 01-9.71-2.792A7.251 7.251 0 0111.743.79a.325.325 0 00-.13-.599 9.783 9.783 0 00-6.19 1.243A9.809 9.809 0 00.822 7.431a9.81 9.81 0 00.987 7.494 9.81 9.81 0 005.997 4.602 9.817 9.817 0 007.494-.987 9.786 9.786 0 004.17-4.738.326.326 0 00-.08-.367z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_102_13">
                            <path fill="#fff" d="M0 0H20V20H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </>
                  ): (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <g fill="#F4B12C" clipPath="url(#clip0_101_2)">
                          <path d="M9.989 15.038a5.055 5.055 0 01-5.05-5.05A5.055 5.055 0 019.99 4.94a5.055 5.055 0 015.049 5.049 5.055 5.055 0 01-5.05 5.049zM9.989 3.964a.659.659 0 01-.659-.659V.768a.659.659 0 111.317 0v2.537a.659.659 0 01-.658.659zM9.989 19.868a.659.659 0 01-.659-.659v-2.537a.659.659 0 111.317 0v2.537a.659.659 0 01-.658.659zM3.305 10.647H.768a.659.659 0 110-1.317h2.537a.659.659 0 110 1.317zM19.21 10.647h-2.538a.659.659 0 110-1.317h2.537a.659.659 0 110 1.317zM14.715 5.922a.657.657 0 01-.466-1.125l1.794-1.793a.659.659 0 11.931.931L15.18 5.729a.657.657 0 01-.465.193zM3.47 17.167a.658.658 0 01-.466-1.124l1.793-1.794a.658.658 0 11.932.931l-1.794 1.794a.657.657 0 01-.466.193zM5.263 5.922a.657.657 0 01-.466-.193L3.004 3.935a.659.659 0 11.931-.931l1.794 1.793a.659.659 0 01-.466 1.125zM16.508 17.167a.656.656 0 01-.465-.193l-1.794-1.794a.658.658 0 11.931-.931l1.794 1.794a.658.658 0 01-.466 1.124z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_101_2">
                            <path fill="#fff" d="M0 0H20V20H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </>
                  )
                } <span>&nbsp;Toggle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  </ThemeContext.Consumer>
)

export default Navbar