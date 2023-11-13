// AnimePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Animepagecontent from '../components/Animepagecontent';

function Animepage() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  const fetchAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      setAnime(data.data);
    } catch (error) {
      console.error('Error fetching anime data', error);
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAnime();
    }, 1500);
    return () => clearTimeout(timer);
    
  }, [id]);

  return (
    <div>
      {anime && <Animepagecontent anime={anime}/>}
    </div>
  );
}

export default Animepage;
