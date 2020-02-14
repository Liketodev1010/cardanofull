import React from 'react'
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import './Navbar.scss'

const Navbar = () => {

    return (
        <nav className='Navbar'>
            <h1>ITN</h1>
            <div className='Navbar-Icons'>
                <img src={telegram} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </nav>
    )
}

export default Navbar