import React from 'react'
import './Content.css'
import sass from '../../assets/img/sass.svg'
import vercel from '../../assets/img/vercel.svg'
import netlify from '../../assets/img/netlify.svg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Scroll'
function Content() {

  return (

    <div className='Content' id='content' name='content'>
      <div className="abou">
        {/* <h1 style={{textAlign: 'center'}}>My Skils</h1> */}

        <div


          className="contact__container">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><ion-icon name="logo-html5"></ion-icon></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><ion-icon name="logo-css3"></ion-icon></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><ion-icon name="logo-javascript"></ion-icon></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><ion-icon name="logo-react"></ion-icon></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><img src={sass} alt="" /></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><i class="bi bi-github"></i></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><img src={vercel} alt="" /></motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="slider-thumb"><img src={netlify} alt="" /></motion.div>

        </div>
      </div>

    </div>
  )
}

export default Content


