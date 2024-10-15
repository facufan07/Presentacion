"use client"
import "./style.scss";
import Proyect from "../../components/Proyect/page"
import data from "../../data/proyects.json"
import { useEffect, useState } from "react";

export default function Proyectos(){
    const [scale, setScale] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setScale(1);
        }, 2000)
    }, []);

    return(
        <section className="proyects" 
        style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        flexWrap: "wrap",
        flexBasis: "content"}}>
            <div className="proyects-container"
            style={{
                display:"flex", 
                justifyContent:"center", 
                flexWrap: "wrap",
                }}>
                {data.map((info, key) => (
                    <Proyect
                    name = {info.name}
                    image = {info.image}
                    link = {info.link}
                    key = {key}
                    scale={scale}/>
                ))}
                
            </div>
        </section>
    )
}