import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import ThemeContext from './helpers/Theme'
import Navbar from './components/Navbar/Navbar'
import CountriesPage from './components/CountriesPage/CountriesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryDetailPage from './components/CountryDetailPage/CountryDetailPage'

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
    <BrowserRouter>
      <ThemeContext.Provider value={{theme: T, toggleTheme: togglerFunc}}>
        <Navbar />
      <Routes>
        <Route path='/' element={ <CountriesPage /> } />
        <Route path='/code/:countryCode' element={<CountryDetailPage />} />
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)