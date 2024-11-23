import React from 'react'
import  './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <nav>
                <div className="menu">
                    <Link to={'/'}>Home</Link>
                    {/* <Link to={'/blog'}>Blog</Link>
                    <Link to={'/contacts'}>Contacts</Link> */}
                </div>
            </nav>
        </div>
    </header>
    </>
    )
}

export default Header