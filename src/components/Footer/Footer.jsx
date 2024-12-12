import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer__wrap">
                        <h2>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>

                        <div className="footer__input">
                            <input placeholder='Enter your email address' type="text" />
                            <input placeholder='Subscribe to Newsletter' type="text" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="footer2">
                <div className="container">
                    <div className="footer__wrap2">

                        <div className='shop'>
                            <h2>SHOP.CO</h2>
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <img src="/x.png" alt="" />
                            <img src="/fesbook.png" alt="" />
                            <img src="/insto.png" alt="" />
                            <img src="/gid.png" alt="" />
                        </div>

                        <div>
                            <h3>Company</h3>
                            <p>About </p>
                            <p>Features</p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>

                        <div>
                            <h3>Help</h3>
                            <p>Customer Support</p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div>
                            <h3>FAQ</h3>
                            <p>Account</p>
                            <p>Manage Deliveries</p>
                            <p>Orders</p>
                            <p>Payments</p>
                        </div>

                        <div>
                            <h3>Resources</h3>
                            <p>Free eBooks</p>
                            <p>Development Tutorial</p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>

                    </div>

                    <hr />

                    
                   <div className="footer__wrap3">
                   <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="footer__icons">
                    <img src="/card-1.png" alt="" />
                    <img src="/card-2.png" alt="" />
                    <img src="/card-3.png" alt="" />
                    <img src="/crad-4.png" alt="" />
                    <img src="/crad-5.png" alt="" />
                    </div>
                   </div>
                   
                </div>
            </section>
        </>
    )
}

export default Footer