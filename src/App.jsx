import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import TeamScreen from './screens/TeamScreen'
import BrandingScreen from './screens/BrandingScreen'
import DonateScreen from './screens/DonateScreen'
import ApplyScreen from './screens/ApplyScreen'
import SharedLayouts from './screens/SharedLayouts'
import ErrorScreen from './screens/ErrorScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <SharedLayouts /> }>
          <Route index element={ <HomeScreen /> }></Route>
          <Route path="/about" element={ <AboutScreen /> }></Route>
          <Route path="/team" element={ <TeamScreen /> }></Route>
          <Route path="/branding" element={ <BrandingScreen /> }></Route>
          <Route path="/donate" element={ <DonateScreen /> }></Route>
          <Route path="/apply" element={ <ApplyScreen /> }></Route>
          <Route path="*" element={ <ErrorScreen /> }></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App