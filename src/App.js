import React, { useState, useEffect } from 'react';
import AboutMePage from './All Component/About/AboutMe.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/navbar.js';
import Tile from './All Component/Tile/Tile.js';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './All Component/Footer/Footer.js';

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
            header="Portfolio"
            subHeader="This is one of my project."
            img="https://imgs.search.brave.com/J8FUkJ_yGZYVMdOfDg521emcJp77_7u_uvmEw5pTfLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk5NzYy/MC8xMDYyNTAyNy80/N2IwYWI4YS03Nzdk/LTExZTUtODQ3Ni1h/ZTAxNDhkNDRjNDYu/cG5n"
            text=""
            link="https://github.com/purvanshh/Portfolio"
            linkText="Discover"
            position="center"
          />
        </div>
        <h1 className='skill'>Skillsets I Work With</h1>
        <div className='tiles-container'>
          <Tile
          header={"React"}
          subHeader={""}
          img={"https://imgs.search.brave.com/kdhAvDDas6D9BZffTojqoSUyJxxDJW7VgITEc8id15Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/cmVhY3Quc3Zn.svg"}
          text={""}
          link={""}
          linkText={""}
          position={""}
          />
          <Tile
          header={"JavaSript"}
          subHeader={""}
          img={"https://imgs.search.brave.com/fAr-gGV6LJ-jK-DGVAYQwz7xfNhw5fxLy9CjCKkA71E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovamF2YXNj/cmlwdC1qcy1sb2dv/LTI5NDk3MDE3MDIt/c2Vla2xvZ28uY29t/LnBuZw"}
          text={""}
          link={""}
          linkText={""}
          position={""}
          />
          <Tile
          header={"Java"}
          subHeader={""}
          img={"https://imgs.search.brave.com/-mEXlzS-gesu3kt_oyQ-_bTlMKu0Ie9ok7TM6LwBDkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDcvSmF2YS1TeW1i/b2wtNzAweDM5NC5w/bmc"}
          text={""}
          link={""}
          linkText={""}
          position={""}
          />
        </div>
        <AboutMePage />
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;