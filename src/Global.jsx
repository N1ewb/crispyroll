import {React, useState} from 'react'

const API_URL = 'https://api.jikan.moe/v4/anime?'

function Global() {
    const [ movies, setMovies ] = useState();
    const [ search, setSearch ] = useState('');
    
    const getAiringAnime = async() => {
        const response = await fetch(`${API_URL}/top/anime?filter=bypopularity`) 
        const data = await response.json()
        console.log(data)
        setMovies(data.data)
    }
  return (
    <div>Global</div>
  )
}

export default Global