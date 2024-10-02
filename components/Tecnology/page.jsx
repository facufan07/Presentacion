"use client"
import { useState } from "react"
import "./style.scss"
export default function Tecnology({ image, title, width }){
    const [isHover, setIsHover] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [position, setPosition] = useState("fixed");
    const [opacity2, setOpacity2] = useState(1);
    

    function handleEnter(){
        setPosition("fixed")
        setIsHover(true);
        setOpacity2(0)
        setTimeout(() => {
            setOpacity(1);
        }, 100)
        
    }

    function handleOut(){
        setTimeout(() => {
            setOpacity2(1)
            setPosition("relative")
            setIsHover(false);
        }, 100)
        
        setOpacity(0);
    }

    return(
        <div 
        className={`tecnology-container${isHover ? "-hover" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleOut}>
            
            <div style={{backgroundImage: `url(${image})`, position: position, opacity:opacity2}}className="img">
            </div>
            {isHover &&(
                <div className="container" style={{opacity: opacity}}>
                    <h1 className="title">{title}</h1>
                    <div className="container-bar">
                        <div className="bar" style={{width: `${width}%`}}>
                        </div>
                    </div>
                    <h2 className="per">{`${width}%`}</h2>
                </div>
            )
            }
            
        </div>
    )
}