import { useEffect, useState } from 'react';
import './App.css'
// import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import up from '././assets/img/up.svg'
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Time from './components/Time/Time';
// import Footer from './components/Footer/Footer';
// import Wave from './components/Wave/Wave';
// import Work from './components/Work/Work';

function App() {
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
    <div className='App'>
      <Header />
      <Hero />
      <About />
      {/* <Work />
      <Content />
      <Time />
      <Contact />
      <Wave />
      <Footer /> */}
      <button className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <img src={up} alt="" />
      </button>
    </div>
  )
}

export default App
