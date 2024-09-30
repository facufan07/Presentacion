"use client"
import "./style.scss"
import Card from "../components/Card/page"
import Button from "../components/Button/page"
import { useState } from "react"

//<Link href="/Pagina"></Link>

export default function home(){
    const [top, setTop] = useState(0);
    function handleClick(){
        setTop(-1000);
    }
    return (
        <main>
            <section style={{top: top}}className="me-section">
                <div className="me">
                    <div className="me-container">
                        <div className="container-photo">
                        </div>
                        <h1>Facundo Fandiño</h1>
                        <p>Estudiante de Tecnicatura en Programación</p>
                    </div>
                    <button onClick={handleClick}>Continuar</button>
                </div>
            </section>
            <Card 
            content="¿Qué te trae por aca?"
            back="rgba(208, 208, 208, 0.9)"
            hover="white"
            />
            <Button
            back="rgba(208, 208, 208, 0.9)"
            hover="rgba(208, 208, 208, 0)"
            content="Busco información acerca de Facundo Fandiño"
            link="/informacion"
            />
            <Button 
            back="rgba(208, 208, 208, 0.9)"
            hover="rgba(208, 208, 208, 0)"
            content="Quiero saber que tecnologías es capaz de usar Facundo Fandiño"
            link="/tecnologias"
            />
            <Button 
            back="rgba(208, 208, 208, 0.9)"
            hover="rgba(208, 208, 208, 0)"
            content="Quiero comunicarme con Facundo Fandiño"
            link="/donar"
            />
            <Button 
            back="rgba(208, 208, 208, 0.9)"
            hover="rgba(208, 208, 208, 0)"
            content="Quiero ver los proyectos en github de Facundo Fandiño"
            link="/donar"
            />
            <Button 
            back="rgba(208, 208, 208, 0.9)"
            hover="rgba(208, 208, 208, 0)"
            content="Donar a Facundo Fandiño"
            link="/donar"
            />
        </main>
    )
}