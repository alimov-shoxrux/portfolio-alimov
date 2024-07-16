import React, { useEffect } from 'react'
import './Content.css'
import sass from '../../assets/img/sass.svg'
import vercel from '../../assets/img/vercel.svg'
import netlify from '../../assets/img/netlify.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Content() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (

    <div className='Content' id='content' name='content'>
      <div className="about__container">

        <div
          className="contact__container">
          <div data-aos="fade-right"
            class="slider-thumb"><ion-icon name="logo-html5"></ion-icon></div>

          <div data-aos="fade-right"
            class="slider-thumb"><ion-icon name="logo-css3"></ion-icon></div>

          <div data-aos="fade-right"
            class="slider-thumb"><ion-icon name="logo-javascript"></ion-icon></div>

          <div data-aos="fade-left"
            class="slider-thumb"><ion-icon name="logo-react"></ion-icon></div>

          <div data-aos="fade-left"
            class="slider-thumb"><img src={sass} alt="" /></div>

          <div data-aos="fade-left"
            class="slider-thumb"><i class="bi bi-github"></i></div>

          <div data-aos="fade-down"
            class="slider-thumb"><img src={vercel} alt="" /></div>

          <div data-aos="fade-down"
            class="slider-thumb"><img src={netlify} alt="" /></div>

        </div>
      </div>

    </div>
  )
}

export default Content


