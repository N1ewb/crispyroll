import {React, useState, useEffect} from 'react'

const API_URL = 'https://api.jikan.moe/v4/anime?'

function CurrentlyAiring({anime}) {
    // const [ airing, setAiring ] = useState();
    // const getAiringAnime = async() => {
    //     const response = await fetch(`${API_URL}/top/anime?filter=bypopularity`)
    //     const data = await response.json()
    //     console.log(`${data} popular`)
    //     setAiring(data.data)
    // }
    // useEffect(()=> {
    //     getAiringAnime()
    // },[])
  return (
    <>
        {/* <div className='currently-airing-container'>  
            <div className='airing-container'>
            {
                    airing?.length > 0?(
                        <div className='container'>
                            {airing.map((anime, index) => (
                                <Animecard anime={anime} key={index}/>
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h6>No airing movies found</h6>
                        </div>
                    )
                }
            </div>
        </div> */}
    </>
  )
}

export default CurrentlyAiring