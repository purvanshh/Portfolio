import React from 'react';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/navbar.js';
import Tile from './All Component/Tile/Tile.js';
import Footer from './All Component/Footer/Footer.js';
import AboutMePage from './All Component/About/AboutMe.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Component />
      </div>
      <div id="projects" className='color-setter'>
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
            img="https://imgs.search.brave.com/aInV5yNoGhQWl5Ek3vZ1MOOdYpLGaO-IbS5Qd2EnCcM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzI2/ZWU3NmM4LTY0NmEt/NGM2OC04Njg4LWZk/MjdjYjkxMWJkNi9k/YTEwamFuLWJkZWQ1/NzY5LTQwOTUtNDJk/Zi1iZmE2LWM1NWI5/ZTdkMzZmYS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/ekkyWldVM05tTTRM/VFkwTm1FdE5HTTJP/QzA0TmpnNExXWmtN/amRqWWpreE1XSmtO/bHd2WkdFeE1HcGhi/aTFpWkdWa05UYzJP/UzAwTURrMUxUUXla/R1l0WW1aaE5pMWpO/VFZpT1dVM1pETTJa/bUV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAucjZ1SXA4NWI3/TTVMWFkta3FpRHE1/cmhxY2Jvd1dWSEZm/VFZNZTg3b3NKWQ"
            text=""
            link="https://mymusicplayer-rho.vercel.app/"
            linkText="Listen it"
            position="center"
          />
          <Tile
            header="Portfolio"
            subHeader="This is one of my project."
            img="https://imgs.search.brave.com/NlrHzU0rCZj80VN_Np5o-1dQvrKA4c02Mw0qdAvWzz4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY4MTAzOTA4/NGNoYXRncHQtaWNv/bi5wbmc"
            text=""
            link="https://github.com/purvanshh/Portfolio"
            linkText="Discover"
            position="center"
          />
        </div>
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="resume">
        {/* Resume component content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
