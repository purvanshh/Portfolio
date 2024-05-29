import AboutMePage from './AboutMePage.js';
import './App.css';
import Component from './Component.js';
import Navbar from './navbar.js'; // Corrected import with uppercase 'Navbar'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Using uppercase 'Navbar' */}
      <Component />
      <AboutMePage />
    </div>
  );
}
export default App;