import AboutMePage from './All Component/About/AboutMePage.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Component />
      <AboutMePage />
    </div>
  );
}
export default App;