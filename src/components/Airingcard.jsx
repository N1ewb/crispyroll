import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const API_URL = 'https://api.jikan.moe/v4/seasons/';

function Airingcard({anime}) {
    
  return (
    <>
    <Link  to={`/Animepage/${anime.mal_id}`}>
        <div className='currently-airing-container'>
            <div className='airing-containerairing-container'>
                <div className='airing-card'>
                    <div className='airing-info'>
                        <h4>{anime.title}</h4>
                        <h4>{anime.score}☆ <span>{anime.scored_by}</span></h4>
                        <h4>{anime.episodes} Episodes</h4>
                        <h4>{anime.synopsis}</h4>
                    </div>
                    <img src={anime.images.jpg.large_image_url}/>
                    <p>{anime.title}</p>
                </div>  

            </div>
        </div>
        </Link>
        </>
  )
}

export default Airingcard