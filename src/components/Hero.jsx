import React, { useState } from 'react'
import "./hero.css"
import Carouselitems from './carouselitems'
import RightIcon from '../rightarrow.svg'
import LeftIcon from '../leftarrow.svg'

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
        {data.map((data, index) => {
          return <Carouselitems data={data} key={index}/>
        })}
        </div>
        <div className='carousell-buttons'>
          <img className='button-arrow' onClick={()=>{
            updateIndex(activeIndex - 1)
          }} src={LeftIcon}/>
          <div className='indicators'>
            {data.map((data, index)=>{
              return (
                <span key={index}>O</span>
              )
            })}
          </div>
          <img className='button-arrow' onClick={()=>{
            updateIndex(activeIndex + 1)
          }} src={RightIcon}/>

        </div>
    </div>
    </>
  )
}

export default Hero