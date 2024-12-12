import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context'

const Header = () => {

    const { isActive, tooggleBurger, user, isAuth, logout } = useAppContext()

    const closeBurger = () => {
        setIsActive(false)
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav className='nav'>

                        <Link to={'/'} ><h1>SHOP.CO</h1></Link>

                        <div className={`menu ${isActive ? 'active' : ''}`}>
                            {/* <Link to={'/'}>Home</Link> */}
                            <Link to={'/sale'} className='dropdown'>
                                Shop
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/2560px-Arrow-down.svg.png" alt="" />

                                <div>
                                    <Link to={'/'} >Man</Link>
                                    <Link to={'/'} >Wommen</Link>
                                    <Link to={'/'} >Kids</Link>
                                </div>
                            </Link>
                            {/* <Link to={'/#selling'}>On Sale</Link> */}
                            {/* <Link to={'/#arrivals'}></Link> */}
                            <a href="/#selling">On Sale</a>
                            <a href="/#arrivals">New Arrivals</a>
                            <Link to={'/'}>Brands</Link>
                        </div>

                        <input placeholder='Search for products...' type="text" />
                        <div>
                            <img src="/korzinka.svg" alt="" />

                            {isAuth ? (
                                <div>
                                    <b>{user.username}</b> <br />
                                    <button onClick={logout}>logout</button>
                                </div>
                            ) : (

                                <Link to={'/login'}>
                                    <img src="/provil.svg" alt="" />
                                </Link>

                            )}

                        </div>

                        <div onClick={tooggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                            <div></div>
                            <div></div>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header