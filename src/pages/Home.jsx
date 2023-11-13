import React from 'react'
import Hero from '../components/Hero';
import AnimeList from '../components/AnimeList';
import AiringList from '../components/AiringList';


import '../App.css';
import '../resposive.css';
import Header from '../components/Header';


function Home() {
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
      ];
  return (
    <>
    <section className='slide-section'>
        <Hero data={data} />
      </section>

      <section className='currently-airing'>
        <div className='section-title'>
          <h1>New Season Exclusives</h1>
          <p>Please watch these titles on a legit streaming service provider!</p>
        </div>
        <AiringList />
      </section>

      <section className='Anilist-section'>
        <AnimeList />
      </section>
    </>
  )
}

export default Home