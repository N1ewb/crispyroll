import React from 'react'
import SearchIcon from '../search.svg'
import BookmarkIcon from '../bookmark.svg'
import UserIcon from '../user.svg'

function Header() {
  return (
    <>
        <div className='header-container'>
            <div className='nav-bar'>
                <div className='logo-wrapper'>
                    <img src="crispyroll.png" alt="crispyroll"/>
                </div>
                <div className='col'>
                    <div className='nav-links'>
                        <a href="#">Browse</a>
                        <a href="#">Anime TVSeries</a>
                        <a href="#">Anime Movies</a>
                        <a href="#">News</a>
                    </div>
                </div>
                <div className='spacer'></div>
                <div className='user-action'>
                    <img src={SearchIcon} alt="search" height="25px"width="25px"/>
                    <img src={BookmarkIcon} alt="bookmark" height="25px" width="25px"/>
                    <img src={UserIcon} alt="user icon" height="25px" width="25px"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header