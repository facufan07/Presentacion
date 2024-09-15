"use client"
import { useState } from "react";
import "./style.scss";

export default function Button(props){
    const [hovered, setHovered] = useState(props.back);
    const [color, setColor] = useState("black")

    function handleOver(){
        setHovered(props.hover);
        setColor("white")
    }

    function handleOut(){
        setHovered(props.back)
        setColor("black")
    }

    return(
        <div 
        className="buttonContainer" 
        style={{backgroundColor: hovered}}
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        >
            <p className="content" style={{color: color}}>{props.content}</p>

        </div>
    )
}