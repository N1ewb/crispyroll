import {React, useState,useEffect } from 'react'

import RightIcon from '../rightarrow.svg'
import LeftIcon from '../leftarrow.svg'
import Airingcard from "./Airingcard";
const API_URL = 'https://api.jikan.moe/v4/seasons/';

function AiringList() {

    const [data, setAiring] = useState([]);

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
            const response = await fetch(`${API_URL}${year}/${season}?&limit=8`);
            const data = await response.json();
            const sortedAiring = data.data.sort((a, b) => a.status.localeCompare(b.status));
            setAiring(sortedAiring);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        console.log(data.data)
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        getAiringAnime();
      }, 1000);
      return () => clearTimeout(timer);
        
    }, []);

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
      if (newIndex < 0){
        newIndex = 1
      }else if(newIndex >= 2) {
        newIndex = 0;
      }
      setActiveIndex(newIndex)
    }

    return (
        <>
    <div className='airing-container'>
        <div className='airing-carousell' style={{transform:`translate(-${activeIndex * 60}%)`}}>
        

            {data?.length > 0 ? (
                <div className="airing-card-container">
                    <div className='airing-cards'>
                        {data.map((data, index) => (
                            <Airingcard anime={data} key={index}/>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='empty'>
                    <h6>No airing anime found</h6>
                </div>
            )}
         

        </div>
        <div className='airing-buttons'>
          {activeIndex == 1 &&
            <img className='airing-button-arrow' onClick={()=>{
                updateIndex(activeIndex - 1)
              }} src={LeftIcon}/>
          }
          <div className='airing-indicators'>
            
          </div>
          {activeIndex == 0 &&
            <img className='airing-button-arrow' onClick={()=>{
                updateIndex(activeIndex + 1)
              }} src={RightIcon}/>
          }

        </div>
    </div>
    </>
    );
}

export default AiringList;
