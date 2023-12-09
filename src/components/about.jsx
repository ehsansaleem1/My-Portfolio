import './about.css'
import AboutContent from './aboutcontent'
import {useState} from 'react'

export default function About() {
  const[show, setShow] = useState({display: "none"})
  const[display, undisplay] = useState({display: "block"})
  const[style, setStyle] = useState({background: "#68ee68", color: "black", border: "1px solid black"})
  const[eduStyle, setEduStyle] = useState({background: "none", color: "white", border: "1px solid white"})
  function changeCont() {
    setShow({display: "block"})
    undisplay({display: "none"})
  }
  function contChange() {
    setShow({display: "none"})
    undisplay({display: "block"})
  }
  function styleChange() {
    setStyle({background: "#68ee68", color: "black"})
    setEduStyle({background: "none", "border": "1px solid white", color: "white"})
  }

  function eduStyleChange() {
    setStyle({background: "none", "border": "1px solid white", color: "white"})
    setEduStyle({background: "#68ee68", color: "black"})
  }
  return(
    <main>
      <h1 className='head-about'>{AboutContent.title}</h1>
      <div className='section-about'>
        <div className='img-side'>
          <img src={AboutContent.AboutImg}/>
        </div>
  
        <div className='content-side'>
          <button style={style} onClick={()=>{contChange(); styleChange();}} className='active'>About</button>
          <button className='style-btn' style={eduStyle} onClick={() => {changeCont(); eduStyleChange();}}>Education</button>
          <h2 style={display}>{AboutContent.content}</h2>
          <ul style={show}>
            {AboutContent.education.map((edu, i) => {
              return(
                <li className='edu-list' key={i}>{edu}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}