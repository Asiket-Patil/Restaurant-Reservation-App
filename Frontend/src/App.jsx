import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Router>
         <Routes>
          <Route  exact path='/' element={<Home/>} />
          <Route path='/Success' element={<Success/>} />
          <Route path='/*' element={<NotFound/>} />
         </Routes>

      </Router>
    </div>
  )
}

export default App
