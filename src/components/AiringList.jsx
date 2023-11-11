import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.jikan.moe/v4/seasons/';

function AiringList() {
    const [airing, setAiring] = useState([]);

    const currentMonth = new Date().getMonth() + 1; 
    const year = new Date().getFullYear(); 
    var season;

    switch (true) {
        case currentMonth >= 3 && currentMonth <= 5:
          season = 'spring';
          break;
        case currentMonth >= 6 && currentMonth <= 8:
          season = 'summer';
          break;
        case currentMonth >= 9 && currentMonth <= 11:
          season = 'fall';
          break;
        default:
          season = 'winter';
          break;
      }

    const getAiringAnime = async () => {
        try {
            const response = await fetch(`${API_URL}${year}/${season}`);
            const data = await response.json();
            // Assuming that the API response has a 'top' property containing the anime list
            const sortedAiring = data.data.sort((a, b) => a.status.localeCompare(b.status));
            setAiring(sortedAiring);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getAiringAnime();
    }, []);

    return (
        <div className='currently-airing-container'>
            <div className='airing-container'>
                {airing?.length > 0 ? (
                    <div className='airing-card-container'>
                        {airing.map((anime, index) => (
                            <div className='airing-card' key={index}>
                                <div className='airing-info'>
                                    <h1>hello</h1>
                                </div>
                                <img src={anime.images.jpg.large_image_url}/>
                                <p>{anime.title}</p>
                                <p>Status: {anime.status}</p>
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h6>No airing anime found</h6>
                    </div>
                )}
                
            </div>
            
        </div>
    );
}

export default AiringList;
