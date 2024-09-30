"use client"
import { useEffect, useState } from "react"
import "./style.scss"
import data from "../../data/info.json"

export default function Informacion(){
    const [hide, setHide] = useState(0);
    const [card, setCard] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [hover, setHover] = useState("black")
    const [hover2, setHover2] = useState("black")

    useEffect(() => {
        const timer = setTimeout(() =>{
            setHide(1);
            setOpacity(1);
        }, 2000);

        return () => clearTimeout(timer); 
    }, [])

    function handleNext(){
        const long = Object.keys(data).length - 1;

        
        if (card < long){
            setOpacity(0);
            setTimeout(() =>{
                setOpacity(1);
                setCard(card + 1);
            }, 1000);
        }
    }

    function handleBack() {

        if (card > 0){
            setOpacity(0);
            setTimeout(() =>{
                setOpacity(1);
                setCard(card - 1);
            }, 1000);
        } 

    }

    function handleOver(){
        setHover("white");
    }

    function handleLeave(){
        setHover("black")
    }
    
    function handleOver2(){
        setHover2("white");
    }

    function handleLeave2(){
        setHover2("black")
    }
    return(
        <main>
            <section className="info-container">
                <div className="text-container">
                    <p style={{opacity: opacity}} className="text">{data[`card${card}`]}</p>
                </div>
                
                <div className="button-container">
                    <button
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}
                    onClick={handleBack} 
                    style={{opacity: hide ,backgroundColor: hover}}
                    ></button>

                    <button 
                    onClick={handleNext} 
                    onMouseOver={handleOver2}
                    onMouseLeave={handleLeave2}
                    style={{opacity: hide, backgroundColor: hover2}}
                    ></button>
                </div>
            </section>
        </main>
    )
}