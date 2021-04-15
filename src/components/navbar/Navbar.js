import React from 'react'
import foxbelLogo from '../../media/foxbel-music.png';
import './Navbar.css';


export default function Navbar() {
    return (
    <>
    <div className="sidebar"> 
        <a href="/">
        <img className="sidebar__logo" src={foxbelLogo} alt=""/>
        </a>        
        <nav className="sidebar__nav">
            <h2 id="libraryMenu" className="sidebar__heading">Mi librería</h2>
            <ul className="sidebar__menu" aria-labelledby="libraryMenu">
                <li className="sidebar__item"><a className="sidebar__link" href="/">Recientes</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Artistas</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Álbums</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Canciones</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Estaciones</a></li>    
            </ul>
            <h2 id="playlistMenu" className="sidebar__heading">Playlist</h2>
            <ul className="sidebar__menu" aria-labelledby="playlistMenu">
                <li className="sidebar__item"><a className="sidebar__link" href="/">Metal</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Para bailar</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Rock 90s</a></li>    
                <li className="sidebar__item"><a className="sidebar__link" href="/">Baladas</a></li>    
            </ul>
        </nav>
    </div>
    </>
    )
}
