"use client"
import { useEffect, useState } from "react"
import "./style.scss"
import data from "../../data/info.json"

export default function Informacion(){
    const [hide, setHide] = useState(0);
    const [card, setCard] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setHide(1);
        }, 3000);

        return () => clearTimeout(timer); 
    }, [])

    function handleClick(){
        const long = Object.keys(data).length - 1;

        if (card < long){
            setCard(card + 1);
        }
    }

    return(
        <main>
            <section className="info-container">
                <div className="text-container">
                    <p className="text">{data[`card${card}`]}</p>
                </div>
                
                <div className="button-container">
                    <button onClick={handleClick} style={{transform: `scale(${hide})`}}></button>
                </div>
            </section>
        </main>
    )
}