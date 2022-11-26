import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import ThemeContext from './helpers/Theme'
import Navbar from './components/Navbar/Navbar'
import CountriesPage from './components/CountriesPage/CountriesPage'

const App = () => {
  const [T, toggleT] = useState('light')
  function togglerFunc() {
    if (T == 'light') {
      toggleT('dark')
    } else {
      toggleT('light')
    }
  }
  return (
    <ThemeContext.Provider value={{theme: T, toggleTheme: togglerFunc}}>
      <Navbar />
      <CountriesPage />
    </ThemeContext.Provider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)