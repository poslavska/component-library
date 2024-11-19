import './Testimonial.css'
import defaultIcon from '../../assets/mark.svg'

export default function Testimonial({logo=defaultIcon, 
    company="Worcation",
    text=`"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsa deleniti inventore cumque accusantium aliquam nisi reiciendis, numquam beatae, eaque laborum tempora eos tempore voluptates? Dolore."`,
    name="Anna Smith", 
    title="Workcation, CEO"}) {
    return (
        <div className="testimonial">
            <div className="testimonial-logo">
                <img src={logo} className="testimonial-company-logo" alt={`${company} logo`} />
                <h1 className="testimonial-company">{company}</h1>
            </div>
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-person">
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-title">{title}</p>
            </div>
        </div>
    )
}