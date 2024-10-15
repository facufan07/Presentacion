import { useState } from "react";
import "./style.scss";

export default function Proyect({ name, image, key, link, scale, description }){
    const [appear, setAppear] = useState(0);
    return(
        <>
        <div 
        key={key} 
        className="proyect-container" 
        style={{transform: `scale(${scale})`}}
        onClick={() => setAppear(1)}
        >
            <div className="image" style={{backgroundImage: `url(${image})`}}></div>
            <h1 className="title">{name}</h1>
        </div>

        <div className="info-container" style={{transform: `scale(${appear})`}}>
            <div className="info-image" style={{backgroundImage: `url(${image})`}}></div>
            <h1 className="info-title">{name}</h1>
            <p className="info-description">{description}</p>
            <a key={key} href={link}>-Repositorio-</a>
            <button 
            className="back"
            onClick={() => setAppear(0)}
            >{"<< Atras"}</button>
        </div>
        
        </>
    )
}