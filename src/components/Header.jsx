import React from 'react'

function Header() {
  return (
    <>
        <div className='header-container'>
            <div className='nav-bar'>
                <div className='col'>
                    <div className='logo-wrapper'>
                        <img src="crispyroll.png" alt="crispyroll"/>
                    </div>
                </div>
                <div className='col'>
                    <div className='nav-links'>
                        <a href="#">Browse</a>
                        <a href="#">Anime TVSeries</a>
                        <a href="#">Anime Movies</a>
                        <a href="#">News</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header