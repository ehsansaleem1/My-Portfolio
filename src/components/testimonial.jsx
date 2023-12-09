import './testimonial.css'
import TestimonialContent from './testimonialcontent'

export default function Testimonial() {
  return(
    <main className='testimonal-section'>
      <h1 className='head-testimonial'>{TestimonialContent.title}</h1>
      <div className='t-center'>
        <div className='testimonial-container'>
          <div className='name-designation'>
            <img src={TestimonialContent.testimonial.image} />
            <h2>{TestimonialContent.testimonial.name}</h2>
            <h2>{TestimonialContent.testimonial.designation}</h2>
          </div>
          <h2>{TestimonialContent.testimonial.testimonial}</h2>
        </div>
      </div>
    </main>
  )
}