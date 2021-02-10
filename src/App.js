import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='main-container'>
          <Sidebar/>
            <Switch>
              <Route exact path="/about"> <About /> </Route>
              <Route exact path="/tsb"> <Home /> </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
