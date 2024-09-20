"use client"
import "./style.scss"
import PersonList from "../../components/PersonList/page"

export default function donar(){

    async function data(event){
        event.preventDefault()
        const formData = new FormData(event.target)

        const data = {nombre: formData.get("nombre"), apellido: formData.get("apellido")}
        
        await fetch("http://localhost:8080/api/persona/save", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    } 

    return(
        <main>
            <section className="sectionForm">
                <form onSubmit={data}>
                    <label>
                        <span className="title">Ingresa un nombre</span>
                        <input className="input" maxLength={10} type="text" name="nombre" required/>
                        <span className="title">Ingresa un apellido</span>
                        <input className="input" maxLength={10} type="text" name="apellido" required/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </section>
            <PersonList/>
        </main>
    )
}