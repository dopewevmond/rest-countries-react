import { createRoot } from 'react-dom/client'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ThemeContext from './helpers/Theme'

const App = () => (
  <ThemeContext.Provider value='dark'>
    <Navbar />
  </ThemeContext.Provider>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)