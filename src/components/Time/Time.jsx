import React from 'react'
import './Time.css'

function Time() {
  return (
    <div className='Time'>
      <div className="container">
        <h2 className='time__title'>Get in touch</h2>
        <div className='time__container'>
          <div>
            <h5 className='time__container__title'>Write</h5>
            <a className='time__container__link' href="">shaalimov923@gmail.com</a>
          </div>
          <div>
            <h5 className='time__container__title'>Call</h5>
            <a className='time__container__link' href="">
              +998(90)5734607
            </a>
          </div>
          <div>
            <h5 className='time__container__title'>Avaible</h5>
            <p className='time__container__link'>Mon-Sat : 24/7</p>
          </div>
        </div>


      </div>
    </div>
  )
}


export default Time;  