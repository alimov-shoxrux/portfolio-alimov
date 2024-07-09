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
                            {/* <ScrollLink className='header__link' to="home" smooth={true} duration={500}>
                                Home
                            </ScrollLink> */}
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
                </nav>
            </div>
        </div>
    )
}

export default Header