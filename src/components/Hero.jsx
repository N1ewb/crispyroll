import React, { useState } from 'react'
import "./hero.css"
import Carouselitems from './carouselitems'

const Hero = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
      if (newIndex < 0){
        newIndex = 2
      }else if(newIndex >= data.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex)
    }

  return (
    <>
    <div className='hero-container'>
        <div className='carousell' style={{transform:`translate(-${activeIndex * 100}%)`}}>
        {data.map((data) => {
          return <Carouselitems data={data}/>
        })}
        </div>
        <div className='carousell-buttons'>
          <button className='button-arrow' onClick={()=>{
            updateIndex(activeIndex - 1)
          }}>left</button>
          <div className='indicators'>
            {data.map((data, index)=>{
              return (
                <span>O</span>
              )
            })}
          </div>
          <button className='button-arrow' onClick={()=>{
            updateIndex(activeIndex + 1)
          }}>right</button>
        </div>
    </div>
    </>
  )
}

export default Hero