import './Navbar.css'
import ThemeContext from '../../helpers/Theme'

const Navbar = () => (
  <ThemeContext.Consumer>
    {
      theme => (
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
              <button className='theme-toggler-btn'>Dark Mode</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  </ThemeContext.Consumer>
)

export default Navbar