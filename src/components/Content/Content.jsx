import React from 'react'
import './Content.css'
import sass from '../../assets/img/sass.svg'
import vercel from '../../assets/img/vercel.svg'
import netlify from '../../assets/img/netlify.svg'
function Content() {

  return (

    <div className='Content' id='content' name='content'>
      <div className="abou">

        <div className="contact__container">
        <div class="slider-thumb"><ion-icon name="logo-html5"></ion-icon></div>
          <div class="slider-thumb"><ion-icon name="logo-css3"></ion-icon></div>
          <div class="slider-thumb"><ion-icon name="logo-javascript"></ion-icon></div>
          <div class="slider-thumb"><ion-icon name="logo-react"></ion-icon></div>
          <div class="slider-thumb"><img src={sass} alt="" /></div>
          <div class="slider-thumb"><i class="bi bi-github"></i></div>
          <div class="slider-thumb"><img src={vercel} alt="" /></div>
          <div class="slider-thumb"><img src={netlify} alt="" /></div>
        </div>
      </div>

    </div>
  )
}

export default Content


