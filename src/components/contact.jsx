import './contact.css'
import ContactContent from './contactcontent'

export default function Contact() {
  return(
    <main>
      <h1 className='contact-head'>{ContactContent.title}</h1>
      <div className='divider'>
        <div className='text-side'>
          <h2>{ContactContent.content}</h2>
        </div>
        <div className='info-side'>
          <h2>{ContactContent.email}</h2>
          <h2>{ContactContent.emailSecond}</h2>
          <h2>{ContactContent.phone}</h2>
          <h2>{ContactContent.address}</h2>
          <div>
            {ContactContent.social.map((social, i) => {
              return(
                <button key={i}><a href={social.link}><i className={social.icon}></i></a></button>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}