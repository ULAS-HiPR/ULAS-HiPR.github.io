import React from 'react';
import '../css/App.css';
import '../css/Home.css';
import backgroudImg from '../Images/SOTTR_Wallpaper_9_1920_1080.jpg'; 

const Home = () => {
  return (
    <>
        <img src={backgroudImg} alt="Slay space img"/>
        <h1>ROCKETS!!!!!!!</h1>
    </>
  );
};

export default Home;