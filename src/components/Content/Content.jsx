import React from 'react'
import './Content.css'
import sass from '../../assets/img/sass.svg'
import vercel from '../../assets/img/vercel.svg'
import netlify from '../../assets/img/netlify.svg'
function Content() {

  return (

    <div className='Content' id='content' name='content'>
      <div className="container">

        <div className="contact__container">
          <div className='contact__drop__one'>
            <div class="slider-thumb"><ion-icon name="logo-html5"></ion-icon></div>
            <div class="slider-thumb"><ion-icon name="logo-css3"></ion-icon></div>
            <div class="slider-thumb"><ion-icon name="logo-javascript"></ion-icon></div>
            <div class="slider-thumb"><ion-icon name="logo-react"></ion-icon></div>
            <div class="slider-thumb"><img src={sass} alt="" /></div>
          </div>
          <div className='contact__drop__two'>
            <div class="slider-thumb"><i class="bi bi-github"></i></div>
            <div class="slider-thumb"><img src={vercel} alt="" /></div>
            <div class="slider-thumb"><img src={netlify} alt="" /></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Content



{/* <div className='contact__div'>
            <h3 className='contact__div__title'>Feature image</h3>
            <p className='contact__div__text'>
              Thanks to powerful targeting techniques, I can help you gain hyper-targeted real organic followers that won’t unsubscribe after the promo campagin ends.
            </p>
          </div>
          <div className='contact__div'>
            <h3 className='contact__div__title'>Content scheduling</h3>
            <p className='contact__div__text'>
              Blogging can be exhausting sometimes, we know. I'll create a content plan and schedule all your posts in advance. So you won’t have to create posts on-the-go.
            </p>
          </div>
          <div className='contact__div'>
            <h3 className='contact__div__title'>Content creation</h3>
            <p className='contact__div__text'>
              Instagram is built on beautiful content - both photo and video. I will create engaging content and edit photos for your Instagram profile to help you stand out from the crowd.
            </p>
          </div>
          <div className='contact__div'>
            <h3 className='contact__div__title'>Account handling</h3>
            <p className='contact__div__text'>
              If you find it boring to manage your profile, reply to comments and messages, I'll take over this whole routine. You won’t have to worry about anything.
            </p>
          </div> */}