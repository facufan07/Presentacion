import "./style.scss"
import Card from "../components/Card/page"
import Button from "../components/Button/page"

//<Link href="/Pagina"></Link>

export default function home(){
    return (
        <main>
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
            link="/donar"
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