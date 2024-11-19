import { FaCircleCheck } from "react-icons/fa6"
import { BsFillExclamationTriangleFill } from "react-icons/bs"
import { FaCircleXmark } from "react-icons/fa6"
import { HiInformationCircle } from "react-icons/hi"

import './Banner.css'

export default function Banner ({status="info", title="title", text=""}) {
    let icon
    if (status === "success") {
        icon = <FaCircleCheck className="icon success-icon"/>
    } else if (status === "warning") {
        icon = <BsFillExclamationTriangleFill className="icon warning-icon"/>
    } else if (status === "error") {
        icon = <FaCircleXmark className="icon error-icon"/>
    } else {
        icon = <HiInformationCircle className="icon info-icon"/>
    }

    return (
        <div className={`banner ${status}`}>
            {icon}
            <div className={`banner-top ${text ? "" : "banner-center"}`}>
                <p className={`banner-title ${status}-title`}>{title}</p>
                {text && <p className={`banner-text ${status}-text`}>{text}</p>}
            </div>
        </div>
    )
}