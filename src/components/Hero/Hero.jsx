import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <div className="hero__box">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='box__description'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button>Shop Now</button>

              <div className="hero__inner">

                <div>
                  <h3>200+</h3>
                  <p>International Brands</p>
                </div>

                <div>
                  <h3>2,000+</h3>
                  <p>High-Quality Products</p>
                </div>

                <div>
                  <h3>30,000+</h3>
                  <p>Happy Customers</p>
                </div>

              </div>

            </div>
            
              <img src="/hero-img.png" alt="" />
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero