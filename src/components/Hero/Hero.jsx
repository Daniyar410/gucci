import React, { useEffect } from 'react';
import './Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      easing: 'ease-in-out', // Тип анимации
      once: true, // Анимация срабатывает только один раз
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrap">
            <div
              className="hero__box"
              data-aos="fade-right"
            >
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p
                className="box__description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <button data-aos="zoom-in" data-aos-delay="500">
                Shop Now
              </button>

              <div
                className="hero__inner"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div data-aos="flip-left">
                  <h3>200+</h3>
                  <p>International Brands</p>
                </div>

                <div data-aos="flip-left" data-aos-delay="200">
                  <h3>2,000+</h3>
                  <p>High-Quality Products</p>
                </div>

                <div data-aos="flip-left" data-aos-delay="400">
                  <h3>30,000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>

            <img
              src="/hero-img.png"
              alt="Hero"
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
