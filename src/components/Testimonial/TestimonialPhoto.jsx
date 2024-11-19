import quote from '../../assets/quote.svg'
import defaultIcon from '../../assets/woman.jpg'

import './TestimonialPhoto.css'

export default function TestimonialPhoto({src=defaultIcon, 
    name="Anna Smith", 
    title="Workcation, CEO",
    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsa deleniti inventore cumque accusantium aliquam nisi reiciendis, numquam beatae, eaque laborum tempora eos tempore voluptates?"}) {
    return (
        <div className="testimonial-photo">
            <img src={src} className="testimonial-photo-img" alt={name} />
            <div className="tp-text-container">
                <img src={quote} className="quote" alt="quote icon" />
                <p className="testimonial-photo-text">{text}</p>
                <p className="testimonial-photo-name">{name}</p>
                <p className="testimonial-photo-title">{title}</p>
            </div>
        </div>
    )
}