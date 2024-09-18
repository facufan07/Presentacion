"use client"
import "./style.scss"

export default function donar(){

    function data(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        
        const data = {name: formData.get("name"), surname: formData.get("surname")}

        fetch("http://localhost:8080/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    } 

    return(
        <main>
            <section className="sectionForm">
                <form onSubmit={data}>
                    <label>
                        <span className="title">Ingresa un nombre</span>
                        <input className="input" type="text" name="name"/>
                        <span className="title">Ingresa un apellido</span>
                        <input className="input" type="text" name="surname"/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}