import React from 'react'
import './About.css'
import me from '../../assets/img/portrait.jpg'

function About() {
    return (
        <div className='About' id='about'>
            <div className="container__about">
                <div className="about__container">
                    {/* left */}
                    <div className='me__img__father'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="650" height="650"
                            viewBox="-25 -25 250 250" className="rotate">
                            <defs>
                                <linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%" >
                                    <stop offset="0%" style={{ stopColor: '#febc25', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#eb0473', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path d="M197.147303014344 76.28499384273267 C186.9751480843067 51.63216675785323 144.8888723847147 12.845467662431263 120.47254083946174 2.118055436272769 C113.76639072807626 -0.8283182465222323 98.52067372738895 -0.26018286009815916 91.22435491394373 0.38580395684772384 C83.88505187691862 1.0355964246264673 68.89199647932116 3.489944746095908 62.56764692104636 7.270183096414186 C43.589156364227364 18.614150910491034 10.048866813005052 52.065119799104565 3.6499617322122333 73.2293047196037 C-2.1560968989125078 92.43266794767011 5.7931635147863805 134.843902794134 14.995379315159056 152.67081224194584 C20.813025548117714 163.94099486363106 40.54387773763521 181.7275379578781 51.78186203074069 187.6071410946475 C64.8190727321442 194.42808183770606 94.70885149989837 200.1381771440933 109.4110747058723 199.55617345438952 C118.81361017021072 199.18396373779427 137.29545698706175 193.54731864810893 145.5473743131654 189.0249217532731 C156.23359992163395 183.16842179097011 174.87854446363272 166.6421530078015 182.22173583554485 156.9173625196203 C187.13150142672637 150.41522478384607 194.29477033823377 135.3883551700267 196.1568864190123 127.45638712943077 C199.08120681685594 114.99979745943499 202.02769947777037 88.11292715145848 197.147303014344 76.28499384273267Z" stroke="none" fill="url(#lgrad)" />
                        </svg>
                        <div className='me_img__div'>
                            <img className='me__img' src={me} alt="" />
                        </div>
                    </div>
                    <div className="about__right">
                        <h2 className='about__right__title'>Hello , My name is Shoxrux</h2>
                        <p className='about__right__text'>Welcome to my personal portfolio website,you can see my goal , my skills, and works in there.I have been learning social media for 3 years. And now I am frontend-developer , gamer , designer , you-tuber and student . </p>
                        <p className='about__right__text'>So, My name is Shoxrux. I'm 17 years old . I was born in Uzbekistan. I have learned many skills , HTML ,CSS  ,JAVASCRIPT ,REACT ,BOOTSTRAP ,TAILWIND ,GIT-HUB. AND MORE I can work with vercel.com , netlify.com , vite.js and and the most popular libraries material-ui.com and ant.design.com and other.</p>
                        <p className='about__right__text'>
                            I hope you like my work and results. You can learn about me through this website.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
