import React from 'react'
import  Home from './Components/Home'
import Detail from "./Components/Details"
import MainPage from "./Components/Main_page.jsx"

import {Switch, Route} from "react-router-dom"
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer"



const App = () => {
  return (
    <>
     <div className="main_page_nav">
          <Navbar />
        </div>

    <Switch>
      <Route exact path="/" component={MainPage} />

      <Route exact path="/Home/:name" children={<Home />}></Route>
      
      <Route exact path="/detail/:id" children={<Detail />} >
      </Route>
    </Switch>

    
    <div className="Footer_main_page">
            <Footer />
          </div>
    </>
  )
}

export default App
