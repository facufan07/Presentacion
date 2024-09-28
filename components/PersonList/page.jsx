"use client"
import { useState } from "react"
import { useEffect } from "react"
import "./style.scss"

export default function PersonList(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "http://localhost:8080/api/persona/get"

        const fetchData = async () => {
            try{
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error("The response wasn't ok");
                }

                const result = await response.json();
                setData(result);

            }catch(error){
                console.log(error);
                
            }finally{
                setLoading(false);
            }
        };

    useEffect(() =>{
        //fetchData();
    },[])

    return(
        <section className="sectionList">
            {loading ?
            <h1 className="loading">loading...</h1>
            :
            data.map((dato, index)=>(
                <div className="infoContainer" key={index}>
                    <h1 className="info">{dato.nombre}</h1>
                    <h2 className="info">{dato.apellido}</h2>
                </div>
            ))
            
            }
            
        </section>
    )
}