import React, { useEffect }  from 'react'
import { useState } from 'react'
import SearchIcon from '../search.svg'
import Animecard from './Animecard'

const API_URL = 'https://api.jikan.moe/v4/anime?'

function AnimeList() {
    

    // const [ movies, setMovies ] = useState();
    // const [ search, setSearch ] = useState('');

    // const searchMovies = async() => {
    //     const response = await fetch(`${API_URL}q=${search}&limit=8`) 
    //     const data = await response.json()
    //     console.log(data)
    //     setMovies(data.data)
    // }

    //  useEffect(() => {
    //     searchMovies()
    //  },[search])
     
  return (
    <>
        {/* <div className='Animelist'>
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
                            <h6>No movies found</h6>
                        </div>
                    )
                }
            </div>
        </div> */}
    </>
  )
}

export default AnimeList