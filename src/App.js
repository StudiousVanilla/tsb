import Sidebar from './components/sidebar';
import About from './components/about';


function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Sidebar/>
        <About/>
      </div>
    </div>
  );
}

export default App;
