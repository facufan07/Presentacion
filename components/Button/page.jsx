"use client"
import { useState } from "react";
import Link from "next/link"
import "./style.scss";

export default function Button(props){
    const archivo = "/archivos/cvActualizadoNuevo.pdf";
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
        <>
        {props.content == "Descargar CV" ? (
            <a 
            href={archivo} 
            download="CV_Facundo_Fandiño"
            style={{textDecoration:"none"}}>
                <div
                className="buttonContainer" 
                style={{backgroundColor: hovered}}
                onMouseOver={handleOver}
                onMouseOut={handleOut}
                >
                    <p className="content" style={{color: color}}>{props.content}</p>
                </div>
            </a>
        ):
            <Link 
            href={props.link} 
            style={{textDecoration: "none"}}>
                <div
                className="buttonContainer" 
                style={{backgroundColor: hovered}}
                onMouseOver={handleOver}
                onMouseOut={handleOut}
                >
                    <p className="content" style={{color: color}}>{props.content}</p>
                </div>
            </Link>
        
        }
        </>
    )
}