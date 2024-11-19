import { BsFillQuestionSquareFill } from "react-icons/bs"

import './Card.css'

export default function Card({
    reactIcon=<BsFillQuestionSquareFill />, 
    src, 
    background,
    imgColor, 
    wrapperBorder,
    title="title", 
    text="text"}) {
    return (
        <div className="card">
            {src ? 
                <img src={src} className={`card-img ${wrapperBorder === "circle" ? "circle" : "square"}`} 
                style={{backgroundColor: background}}/> 
            : <span className={`icon-wrapper ${wrapperBorder === "circle" ? "circle" : "square"}`} style={{backgroundColor: background,
                color: imgColor}}>{reactIcon}</span>}
            <p className="card-title">{title}</p>
            <p className="card-text">{text}</p>
        </div>
    )
}