import React, { useEffect } from 'react'
import './Time.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Time() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='Time'>
      <div className="container">
        <h2 data-aos="fade-down" className='time__title'>Get in touch</h2>
        <div className='time__container'>
          <div className='time__div'>
            <h5 data-aos="fade-down" className='time__container__title'>Write</h5>
            <a data-aos="fade-down" className='time__container__link' href="">shaalimov923@gmail.com</a>
          </div>
          <div className='time__div'>
            <h5 data-aos="fade-down" className='time__container__title'>Call</h5>
            <a data-aos="fade-down" className='time__container__link' href="">
              +998(90)5734607
            </a>
          </div>
          <div className='time__div'>
            <h5 data-aos="fade-down" className='time__container__title'>Avaible</h5>
            <p data-aos="fade-down" className='time__container__link'>Mon-Sat : 24/7</p>
          </div>
        </div>


      </div>
    </div>
  )
}


export default Time;  