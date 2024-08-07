import React, { useState, useEffect } from 'react';
import './Hero.css';
import Typed from 'typed.js';
import close from '../../assets/img/close.svg'
import share from '../../assets/img/share.svg'
import { Link } from 'react-scroll';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        setTimeout(() => {
            Aos.init({ duration: 2000 });
        }, 500);
    }, []);

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        var typed = new Typed(".auto__type", {
            strings: ["DEVELOPER", "DESIGNER", "YOUTUBER", "GAMER"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });
        return () => {
            typed.destroy();
        };

    }, []);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className='Hero' id='hero' name='hero'>
            <div className="container hero__content">
                <div className="hero__container">
                    <div className="hero__left">
                        <h1 data-aos="fade-left" className='hero__left__title'>Hello, Discover My Work</h1>
                        <h1 data-aos="fade-right" className='animated__text'>
                            I'm a <span className='auto__type'></span>
                        </h1>

                        <div className='hero__left__into'>
                            <Link data-aos="fade-down" to="content"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className='hero__left__first'>
                                Skills
                            </Link>
                            <Link data-aos="fade-down"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500} className='hero__left__second'>About</Link>
                        </div>

                    </div>
                    <div className="hero__right">
                        <div className={clicked ? 'hero__right__imgs' : 'hidden'}>
                            <a href="https://github.com/shokhruhmirzo">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.instagram.com/___shok.h/">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://t.me/alimov_shoxrux">
                                <i className="bi bi-telegram"></i>
                            </a>
                            <a href="">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className="hero__rights__div">
                            <button onClick={handleClick} className='hero__rights__btn'>
                                <img src={clicked ? close : share} alt="" />
                            </button>
                        </div>

                    </div>
                </div>

                <div class="animated-divider">
                </div>
            </div>
        </div>
    );
}

export default Hero;
