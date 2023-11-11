import React from 'react'

function Animecard({anime}) {
  return (
    
    <div className='anime-card'>
        <div className='Poster'>
            <img src={anime.images.jpg.large_image_url !== 'N/A'? anime.images.jpg.large_image_url: '123123'}/>
            <h5>{anime.title_english}</h5>
            <h6>{anime.status}</h6>
        </div>
        <div className='anime-details'>
        
        </div>
        
    </div>
  )
}

export default Animecard