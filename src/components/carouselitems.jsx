import React from 'react'

function Carouselitems({data}) {
  return (
    <div className='carousell-Items'>
        <div></div>
        <img className='carousel-item' src={data.src}/>
        
    </div>
  )
}

export default Carouselitems