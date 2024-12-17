import React, { useEffect } from 'react';
import './Category.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Btn from '../Btn/Btn';
import Products from '/public/products.json';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-in-out', // Тип анимации
      once: true, // Анимация срабатывает только один раз
    });
  }, []);

  return (
    <>
      <section className="category">
        <div className="container">
          <div id="arrivals" data-aos="fade-up">
            <SectionTitle position="center">NEW ARRIVALS</SectionTitle>
          </div>

          <div className="category__wrap">
            {Products.slice(0, 4).map((card, i) => (
              <Link
                to={`/product/${card.id}`}
                key={i}
                className="category__card"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Card
                  image={card.image}
                  name={card.name}
                  rate="4.5"
                  price={card.price}
                  stars="⭐⭐⭐⭐"
                />
              </Link>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <Btn>View All</Btn>
          </div>

          <hr style={{ margin: '60px 0' }} data-aos="fade-in" />

          <div id="selling" data-aos="fade-up">
            <SectionTitle position="center">TOP SELLING</SectionTitle>
          </div>

          <div className="category__wrap">
            {Products.slice(4, 8).map((card, i) => (
              <Link
                to={`/product/${card.id}`}
                key={i}
                className="category__card"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Card
                  image={card.image}
                  name={card.name}
                  rate="4.5"
                  price={card.price}
                  stars="⭐⭐⭐⭐"
                />
              </Link>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <Btn>View All</Btn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
