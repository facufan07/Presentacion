import "./style.scss";

export default function Proyect({ name, image, key, link, scale }){
    return(
        <a key={key} href={link} style={{transform: `scale(${scale})`}}>
            <div className="proyect-container">
            <div className="image" style={{backgroundImage: `url(${image})`}}></div>
            <h1 className="title">{name}</h1>
        </div>
        </a>
        
    )
}