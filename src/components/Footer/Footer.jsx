import React from 'react'
import { Link } from 'react-scroll'
import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>

            <div className="container">
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <Link className='footer__link'
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
                    <li className='footer__item'>
                        <Link  className='footer__link' to="about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' to="work"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Works
                        </Link>
                    </li>
                    <li className='footer__item'>
                        <Link  className='footer__link' to="content"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className='footer__item'>
                        <Link  className='footer__link' to="contact"
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
                <div className='footer__div'>
                </div>

                <div className='footer__down__list'>
                    <a className='footer__logo' href="#">
                        Alimov
                    </a>

                    <p className='footer__success'>® A step for success</p>
                </div>
            </div>
        </div >
    )

}


export default Footer