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
import MobIndCoaching from './components/MobIndCoaching'
import Contact from './components/Contact';
import Consultancy from './components/Consultancy';
import Privacy from './components/Privacy';
import MobileMenu from "./components/MobileMenu";
import { useState } from 'react';


function App() {

  // used to togggle mobile menu
  const [menuToggle, setMenuToggle] = useState(false)

  const toggleMenu = () =>{
    setMenuToggle(!menuToggle)
    // changes color for mobile top bar and prevents scrolling of body

    // TODO: this creates a bug if moving from mobile, on the menu screen, to desktop on a device without refeshing the page as 'main' position is locked into fixed
    const sideBar = document.getElementById('side-bar')
    const topBar = document.getElementById('top-bar')
    const sideContent = document.getElementById('side-content')
    const main = document.getElementById('main')
      if(menuToggle){
          sideBar.style.borderColor = null
          sideContent.style.borderColor = null
          topBar.style.backgroundColor = null
          main.style.position = null
      }
      else{
          sideBar.style.borderColor = '#fefefe'
          sideContent.style.borderColor = '#fefefe'
          topBar.style.backgroundColor = 'var(--tsb-blue)'
          main.style.position = 'fixed'
      }
  }


  return (
    <Router>
      <div className="App" id="App">
        <div className='main-container' id="main">
          <Sidebar toggleMenu={toggleMenu} menuToggle={menuToggle}/>
          <div className='non-side-content'>
            {/* Mobile menu only appears on mobile  */}

            { menuToggle && 
              <div className='mob-only'>
                  {/* sending menuToggle as prop to MobileMenu component */}
                  <MobileMenu toggleMenu={toggleMenu}/>
              </div>
            }

            {/*  */}
            <Switch>
              <Route exact path="/about"> <About /> </Route>
              <Route exact path="/coaching"> <WhatIsCoaching/> </Route>
              <Route exact path="/coaching/executive"> <ExCoaching /> </Route>
              <Route exact path="/coaching/lifestyle"> <LifeCoaching /> </Route>
              <Route exact path="/coaching/career"> <CareerCoaching /> </Route>
              <Route exact path="/coaching/mentor"> <MentorCoaching /> </Route>
              {/* mobile only */}
              <Route exact path="/coaching/individual"> <MobIndCoaching /> </Route>
              {/*  */}
              <Route exact path="/blog"> <Blogs /> </Route>
              <Route exact path="/blog/:blogRef"> <BlogPost /> </Route>
              <Route exact path="/blog/theme/:theme"> <FilteredBlogs/> </Route>
              <Route exact path="/contact"> <Contact /> </Route>
              <Route exact path="/consultancy"> <Consultancy /> </Route>
              <Route exact path="/privacy"> <Privacy /> </Route>
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
