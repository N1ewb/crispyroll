import React, { useEffect }  from 'react'
import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import AnimeList from './components/AnimeList';
// import CurrentlyAiring from './components/currentlyAiring';

import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import AiringList from './components/AiringList';

const API_URL = 'https://api.jikan.moe/v4/anime?'

function App() {
  
  const data = [
    {
        "src": "./freiren.webp",
        "alt": "Wallpaper HD 1"
    },
    {
        "src": "./maquia.png",
        "alt": "Wallpaper HD 2"
    },
    {
        "src": "./86.webp",
        "alt": "Wallpaper HD 3"
    }
  ]

  return (
    <>
      <Header />
      
      <section className='slide-section'>
        <Hero data={data}/>
      </section>

      <section className='currently-airing'>
        <AiringList />
      </section> 
      
      <section className='Anilist-section'>
        <AnimeList />
      </section> 
      
    </>
  );
}

export default App;
