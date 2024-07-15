import React, { useEffect, useState } from 'react'
import './Header.css'
import { ScrollLink } from 'react-scroll'
import { Link } from 'react-scroll'

function Header() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);
    return (
        <div className={!showScroll ? 'Header' : 'Headerfiexd'}>
            <div className="container">
                <nav className='header__nav'>
                    <a className='header__logo' href="#">
                        Alimov
                    </a>
                    <ul className='header__list'>
                        <li className='header__item' >
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to="about"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to="work"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Works
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to="content"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to="contact"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>
                    <div className="header__burger">
                        <button class="burger__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i class="bi bi-list"></i>
                        </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Select </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <li className='header__item' >
                                    <Link
                                        activeClass="active"
                                        to="hero"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='header__item'>
                                    <Link to="about"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-40}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className='header__item'>
                                    <Link to="work"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Works
                                    </Link>
                                </li>
                                <li className='header__item'>
                                    <Link to="content"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className='header__item'>
                                    <Link to="contact"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-20}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header