import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import {useForm} from 'react-hook-form'




//assets
import '../node_modules/normalize.css/normalize.css'
import './assets/css/app.scss'
import './assets/css/style.scss'
import bg from './assets/imgs-icons/doggo.png'

//components
import {NavBar} from './components/NavBar'
import {stepNumberOne} from './components/Allinone/stepNumberOne'
import {stepNumberTwo} from './components/Allinone/stepNumberTwo'
import {stepNumberThree} from './components/Allinone/stepNumberThree'
import {Footer} from './components/Footer'


function App() {
  return (
      <Router>
      <NavBar />
        <div className="router-section">
          <main>
            <div className="route-form">
              <Route exact path="/" component={stepNumberOne} />
              <Route exact path="/step-two" component={stepNumberTwo} />
              <Route exact path="/step-three" component={stepNumberThree} />
            </div>
            <div className="background-image">
              <img src={bg} alt="" />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
