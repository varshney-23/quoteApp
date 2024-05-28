import React, { Fragment } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Route, Routes} from 'react-router-dom'

import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'
import First from './Components/pages/First'
import ShowParti from './Components/pages/ShowParti'
import DeleteQuote from './Components/pages/DeleteQuote'
import Register from './Components/pages/Register'

const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<First />}/>
          <Route path = "/allQuotes" element = { <AllQuotes /> } />
          <Route path = "/new" element = { <NewQuotes /> } />
          <Route path = "/quotes/:id" element = { <ShowParti/> } />
          <Route path='/delete/:id' element = { <DeleteQuote/> } />
          <Route path='/register' element = { <Register/> } /> 
        </Routes>
      </main>
    </Fragment>
  )
}

export default App