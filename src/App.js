import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import Blogs from './components/Blogs';
import FilteredBlogs from './components/FilteredBlogs';
import BlogPost from './components/BlogPost';
import WhatIsCoaching from './components/WhatIsCoaching';
import ExCoaching from './components/ExCoaching'
import LifeCoaching from './components/LifeCoaching'
import CareerCoaching from './components/CareerCoaching'
import MentorCoaching from './components/MentorCoaching'
import Contact from './components/Contact';
import Consultancy from './components/Consultancy';
import StorageTest from './components/StorageTest';


function App() {
  return (
    <Router>
      <div className="App" id="App">
        <div className='main-container'>
          <Sidebar/>
          <div className='non-side-content'>
            <Switch>
              <Route exact path="/about"> <About /> </Route>
              <Route exact path="/coaching"> <WhatIsCoaching/> </Route>
              <Route exact path="/coaching/executive"> <ExCoaching /> </Route>
              <Route exact path="/coaching/lifestyle"> <LifeCoaching /> </Route>
              <Route exact path="/coaching/career"> <CareerCoaching /> </Route>
              <Route exact path="/coaching/mentor"> <MentorCoaching /> </Route>
              <Route exact path="/blog"> <Blogs /> </Route>
              <Route exact path="/blog/:blogRef"> <BlogPost /> </Route>
              <Route exact path="/blog/theme/:theme"> <FilteredBlogs/> </Route>
              <Route exact path="/contact"> <Contact /> </Route>
              <Route exact path="/consultancy"> <Consultancy /> </Route>
              <Route exact path="/storage"> <StorageTest /> </Route>
              <Route path="/"> <Home /> </Route>
            </Switch>
          </div>
        </div>
            <Footer/>
      </div>
    </Router>
  );
}

export default App;
