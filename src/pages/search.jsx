import React, { useEffect }  from 'react'
import { useState } from 'react'
import SearchIcon from '../search.svg'
import Animecard from '../components/Animecard'

import './search.css'

const API_URL = 'https://api.jikan.moe/v4/anime?'

function Search() {
  const [ movies, setMovies ] = useState();
    const [ search, setSearch ] = useState('');

    const searchMovies = async () => {
      if (search.trim() !== '') {
        const response = await fetch(`${API_URL}q=${search}&limit=8`);
        const data = await response.json();
        console.log(data);
        setMovies(data.data);
      } else {
        // Clear movies if search is empty
        setMovies([]);
      }
    };

     useEffect(() => {
      const timer = setTimeout(() => {
        searchMovies('')
      }, 1500);
      return () => clearTimeout(timer);
        
     },[search])
  return (
    <>
    <div className='search-container'>
      <div className='search-bar'>
          <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" name="search" placeholder='Search...'/>
      </div>
      
               
                
                
            
            <div className='movie-card-container'></div>
      <div className='Animelist'>
            <div className='movie-card-container'>
                {
                    movies?.length > 0?(
                        <div className='card-container'>
                            {movies.map((anime, index) => (
                                <Animecard anime={anime} key={index}/>
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            
                        </div>
                    )
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Search