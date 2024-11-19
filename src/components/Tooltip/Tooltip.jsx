import { useState } from "react"
import { BsEnvelope } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import './Tooltip.css'

export default function Tooltip({themeStyle="pink-light",
    reactIcon=<BsEnvelope />, 
    src, 
    title="Archive notes",
    text=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo inventore dale tempore?`}){

    const [closeActive, setCloseActive] = useState(false)
    
    const themeColors = {
        "black-bold": "#262626",
        "blue-bold": "#1E40AF",
        "pink-bold": "#A9229B",
        "green-bold": "#47AA5D",
        "black-light": "#FFFFFF",
        "blue-light": "#E0E7FF",
        "pink-light": "#FFF3FC",
        "green-light": "#E7FFF3", 
    }
    const tooltipBackgroundColor = themeColors[themeStyle] || "#1E40AF" //default color

    return (!closeActive && 
        <div className={`tooltip ${themeStyle}`}
            style={{ "--tooltip-bg": tooltipBackgroundColor }}>
            {src ? <img src={src} alt="" className="tooltip-icon" /> 
            : <span className="tooltip-react">{reactIcon}</span>}
            <div className="tooltip-content">
                <p className={`tooltip-title tooltip-title-${themeStyle}`}>{title}</p>
                <p className={`tooltip-text tooltip-text-${themeStyle}`}>{text}</p>
            </div>
            <button className="tooltip-close" onClick={() => setCloseActive(prev => !prev)}><IoClose /></button>
        </div>
    )
}