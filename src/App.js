import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import ExCoaching from './components/ExCoaching'
import LifeCoaching from './components/LifeCoaching'
import CareerCoaching from './components/CareerCoaching'
import MentorCoaching from './components/MentorCoaching'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='main-container'>
          <Sidebar/>
          <div className='non-side-content'>
            <Switch>
              <Route exact path="/about"> <About /> </Route>
              <Route exact path="/coaching/executive"> <ExCoaching /> </Route>
              <Route exact path="/coaching/lifestyle"> <LifeCoaching /> </Route>
              <Route exact path="/coaching/career"> <CareerCoaching /> </Route>
              <Route exact path="/coaching/mentor"> <MentorCoaching /> </Route>
              <Route exact path="/tsb"> <Home /> </Route>
            </Switch>
          </div>
        </div>
            <Footer/>
      </div>
    </Router>
  );
}

export default App;
