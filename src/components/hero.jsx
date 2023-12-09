import './hero.css'
import HeroContent from './herocontent.js'
import {useState} from 'react'

export default function Hero() {
  const[show, setShow] = useState({display: "none"})
  function showNav() {
    setShow({display: "block"})
  }
  function unshowNav() {
    setShow({display: "none"})
  }
  return(
    <main className='hero-section'>
      <div style={show} className='mobile-nav'>
        <button onClick={unshowNav} className='menu-btn show'>&#9587;</button>
        <h1>{HeroContent.title}</h1>
        <ul className='links-mobile'>
          {HeroContent.permalinks.map((link, i) => {
            return(
              <li key={i} className='link-mobile'>{link}</li>
            )
          })}
        </ul>
         <button className='cv-btn-mobile m-t'><a href={HeroContent['cv-download-link']}>Download CV</a></button>
      </div>
      <div className='navbar'>
        <h1>{HeroContent.title}</h1>
        <ul className='links'>
          {HeroContent.permalinks.map((link, i) => {
            return(
              <li key={i} className='link'>{link}</li>
            )
          })}
        </ul>
        <button className='cv-btn'><a href={HeroContent['cv-download-link']}>Download CV</a></button>
        <button onClick={showNav} className='menu-btn active'>&#9776;</button>
      </div>

      <div className='hero-section-content'>
        <div className='hero-section-content-left'>
          <h1>{HeroContent.header}</h1>
          <h2>{HeroContent.subheader}</h2>
          <h2>{HeroContent.paraphrase}</h2>
          <button className='cv-btn m-s'><a href={HeroContent['cv-download-link']}>Download CV</a></button>
        </div>
        <div className='hero-section-content-right'>
          <img src={HeroContent.portfolioImg} />
        </div>
      </div>
    </main>
  )
}