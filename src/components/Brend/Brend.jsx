import React, { useEffect } from 'react';
import './Brend.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brend = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            easing: 'ease-in-out', // Тип анимации
            once: true, // Анимация срабатывает только один раз
        });
    }, []);

    return (
        <>
            <section className="brend">
                <div className="container">
                    <div className="brend__img">
                        <img
                            src="/versace.png"
                            alt="Versace"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        />
                        <img
                            src="/zara.png"
                            alt="Zara"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                        <img
                            src="/gucci.png"
                            alt="Gucci"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                        <img
                            src="/prada.png"
                            alt="Prada"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        />
                        <img
                            src="/klein.png"
                            alt="Calvin Klein"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Brend;
