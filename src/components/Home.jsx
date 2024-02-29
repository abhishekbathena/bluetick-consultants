import React, { useState } from 'react';
import "./Homepage.css"
import logo from "./b-logo.svg"


function Home(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section>
      <header className='home'>
        <nav style={{ display: 'flex' }}>
          <div className='appname'>
            <img src={logo} alt="" width={200} height={70} />
          </div>
          <div className='toggle-bar'>
              <div className='flex-bars'>
                  <ul>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Capabilities</a></li>
                    <li><a href="">Company</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
              </div>
            <button className='toggle-menu' onClick={toggleMenu}>
              <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
            
            <div className={`items ${showMenu ? 'active' : ''}`}>
              <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Capabilities</a></li>
                <li><a href="">Company</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="centerinfo">
          {props.name}
        </div>
      </header>
    </section>
  )
}

export default Home;
