import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"




//assets
import '../node_modules/normalize.css/normalize.css'
import './assets/css/app.scss'
import './assets/css/style.scss'
import bg from './assets/imgs-icons/doggo.png'

//components
import {NavBar} from './components/NavBar'
import {StepNumberOne} from './components/Allinone/StepNumberOne'
import {StepNumberTwo} from './components/Allinone/StepNumberTwo'
import {FinalStep} from './components/Allinone/FinalStep'
import {Footer} from './components/Footer'


function App() {
  return (
      <Router>
      <NavBar />
        <div className="router-section">
          <main>
            <div className="route-form">
              <Route exact path="/" component={StepNumberOne} />
              <Route exact path="/step-two" component={StepNumberTwo} />
              <Route exact path="/final-step" component={FinalStep} />
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
