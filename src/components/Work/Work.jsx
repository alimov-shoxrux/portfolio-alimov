import React, { useEffect } from 'react'
import './Work.css'
import baadiyat from '../../assets/img/baadiyat.png'
import coffee from '../../assets/img/coffee.png'
import movie from '../../assets/img/movie.png'
import remont from '../../assets/img/remont.png'
import sosgame from '../../assets/img/sos-game.png'
import totc from '../../assets/img/totc.png'
import pizza from '../../assets/img/react-pizza.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
function Work() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='Work' id='work'>
            <div className="container">
                <div className="work__container">
                    <div data-aos="fade-right"  className='work__div' >
                        <img src={remont} alt="" />
                        <div data-aos="fade-right" className='work__div__texts'>
                            <h2 className='work__container__title'>Строй - Компаниа</h2>
                            <p className='work__container__text'>Наш ремонт Вы будете показывать друзьям и вспоминать только добрыми словами</p>
                            <a href='https://landing-page-nine-puce.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div  data-aos="fade-down" className='work__div' >
                        <img src={baadiyat} alt="" />
                        <div className='work__div__texts'>
                            <h2 className='work__container__title'>Baadiyat</h2>
                            <p className='work__container__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam fugiat blanditiis laboriosam explicabo?</p>
                            <a href='https://badiiyat-beta.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div  data-aos="fade-left" className='work__div' >
                        <img src={totc} alt="" />
                        <div className='work__div__texts'>
                            <h2 className='work__container__title'>Learning - Center</h2>
                            <p className='work__container__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime reiciendis nihil neque?</p>
                            <a href='https://learning-center-ivory.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div  data-aos="fade-right" className='work__div' >
                        <img src={pizza} alt="" />
                        <div className='work__div__texts'>
                            <h2 className='work__container__title'>Order - Food</h2>
                            <p className='work__container__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet ad fugit quis.</p>
                            <a href='https://react-pizza-mu-beige.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div  data-aos="fade-down" className='work__div' >
                        <img src={movie} alt="" />
                        <div className='work__div__texts'>
                            <h2 className='work__container__title'>Moive - Filter</h2>
                            <p className='work__container__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit voluptatum dolorem quas.</p>
                            <a href='https://movies-eosin-rho.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div  data-aos="fade-left" className='work__div' >
                        <img src={sosgame} alt="" />
                        <div className='work__div__texts'>
                            <h2 className='work__container__title'>Game - Landing</h2>
                            <p className='work__container__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam minima quibusdam. Veniam?</p>
                            <a href='https://game-landing-one.vercel.app/' className='link__icon'>
                                <p className='work__visit' >visit</p>
                                <i class="bi bi-box-arrow-up-left work__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work