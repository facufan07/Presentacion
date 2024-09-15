"use client"
import { useState } from "react";
import "./style.scss";

export default function Card(props){
    const [hovered, setHovered] = useState(props.back);

    function handleOver(){
        setHovered(props.hover);
    }

    function handleOut(){
        setHovered(props.back);
    }

    return(
        <div 
        style={{backgroundColor: hovered}}
        className="background"
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        >
            <h1 className="content">{props.content}</h1>
        </div>
    )
}