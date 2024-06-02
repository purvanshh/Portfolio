import React, { useState, useEffect } from 'react';
import AboutMePage from './All Component/About/AboutMe.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/navbar.js';
import Tile from './All Component/Tile/Tile.js';
import { BrowserRouter as Router} from 'react-router-dom';

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
            img="https://imgs.search.brave.com/hKjctiz8yhnVbLId532fg7or8PX1tCCoTJQVqA-RYyI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xODcyLzE4NzIy/MTMucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
            text=""
            link="https://github.com/purvanshh/TicTacToe"
            linkText="Play it now!"
            position="center"
          />
          <Tile
            header="Music Player"
            subHeader="This is a basic Music Player which is made by using HTML, CSS and JavaScript."
            img="https://imgs.search.brave.com/S96jMvIU1M4G4Z1_T0S1Qlz4Cph8yfUmQhz483THZt8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzIzNDgy/NzAvc2NyZWVuc2hv/dHMvNjkwOTIzMS9t/ZWRpYS84MjA4ZWJj/MDViNTNkMzU3NWZj/YjEwYjhkNzVmYWQz/YS5wbmc_cmVzaXpl/PTQwMHgw"
            text=""
            link="https://mymusicplayer-rho.vercel.app/"
            linkText="Listen it"
            position="center"
          />
          <Tile
            header="React"
            subHeader="This is one of my project."
            img="https://imgs.search.brave.com/J8FUkJ_yGZYVMdOfDg521emcJp77_7u_uvmEw5pTfLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk5NzYy/MC8xMDYyNTAyNy80/N2IwYWI4YS03Nzdk/LTExZTUtODQ3Ni1h/ZTAxNDhkNDRjNDYu/cG5n"
            text=""
            link="https://github.com/purvanshh/Portfolio"
            linkText="Discover"
            position="center"
          />
        </div>
        <AboutMePage />
      </div>
    </Router>
    </div>
  );
}

export default App;