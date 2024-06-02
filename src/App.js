import React, { useState, useEffect } from 'react';
import AboutMePage from './All Component/About/AboutMe.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/Navbar.js';
import Tile from './All Component/Tile/Tile.js';
// import ProgressBar from './All Component/ProgressBar/ProgressBar.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Component />
      <div className='color-setter'>
        <h1 className='skill'>Projects</h1>
        <div className="tiles-container">
          <Tile
            header="Tic Tac Toe"
            subHeader="This is a basic tic tac toe game."
            img="https://imgs.search.brave.com/b20GAw5dHFdFadqg6JqUsOdDmk9-lmNFm_E7cKm3mD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"
            text=""
            link="https://github.com/purvanshh/TicTacToe"
            linkText="Click me!"
            position="center"
          />
          <Tile
            header="Music Player"
            subHeader="This is a basic Music Player which is made by using HTML, CSS and JavaScript."
            img="https://imgs.search.brave.com/T2r6efBBdYUGL6Fh70FcZTaBaQJxVX5jfWXdp0BYpao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzc5NjE4/OTkvc2NyZWVuc2hv/dHMvMTU4NTkzMDUv/bWVkaWEvNDExZmZk/Y2RkMGM0YWQ2Yjll/NmMxNzg4ZTFlMDVk/ZjMuanBnP3Jlc2l6/ZT00MDB4MA"
            text=""
            link="https://mymusicplayer-rho.vercel.app/"
            linkText="Learn more"
            position="center"
          />
          <Tile
            header="React"
            subHeader="Components"
            img="https://imgs.search.brave.com/J8FUkJ_yGZYVMdOfDg521emcJp77_7u_uvmEw5pTfLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk5NzYy/MC8xMDYyNTAyNy80/N2IwYWI4YS03Nzdk/LTExZTUtODQ3Ni1h/ZTAxNDhkNDRjNDYu/cG5n"
            text=""
            link="https://github.com/purvanshh/Portfolio"
            linkText="Discover"
            position="center"
          />
        </div>
        <AboutMePage></AboutMePage>
      </div>
    </Router>
    </div>
  );
}

export default App;