import React, { useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    const { isActive, tooggleBurger, user, isAuth, logout } = useAppContext();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            easing: 'ease-in-out', // Тип анимации
            once: true, // Анимация срабатывает только один раз
        });
    }, []);

    const closeBurger = () => {
        tooggleBurger(false);
    };

    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav" data-aos="fade-down">
                        <Link to={'/'}>
                            <h1 data-aos="fade-up">SHOP.CO</h1>
                        </Link>

                        <div className={`menu ${isActive ? 'active' : ''}`} data-aos="fade-left">
                            <Link to={'/sale'} className="dropdown" data-aos="zoom-in">
                                Shop
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/2560px-Arrow-down.svg.png"
                                    alt="dropdown-icon"
                                />
                                <div>
                                    <Link to={'/men'} data-aos="fade-right">
                                        Men
                                    </Link>
                                    <Link to={'/women'} data-aos="fade-right">
                                        Women
                                    </Link>
                                    <Link to={'/kids'} data-aos="fade-right">
                                        Kids
                                    </Link>
                                </div>
                            </Link>
                            <a href="/#selling" data-aos="fade-up">
                                On Sale
                            </a>
                            <a href="/#arrivals" data-aos="fade-up">
                                New Arrivals
                            </a>
                            <Link to={'/brands'} data-aos="fade-up">
                                Brands
                            </Link>
                        </div>

                        <input
                            placeholder="Search for products..."
                            type="text"
                            data-aos="fade-right"
                        />
                        <div data-aos="fade-left">
                            <img src="/korzinka.svg" alt="Cart" />

                            {isAuth ? (
                                <div>
                                    <b>{user.username}</b> <br />
                                    <button onClick={logout}>Logout</button>
                                </div>
                            ) : (
                                <Link to={'/login'}>
                                    <img src="/provil.svg" alt="Profile" />
                                </Link>
                            )}
                        </div>

                        <div
                            onClick={tooggleBurger}
                            className={`burger ${isActive ? 'active' : ''}`}
                            data-aos="fade-down"
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
