import "./style.scss"
import Tecnology from "../../components/Tecnology/page"

export default function Tecnologias(){
    return(
        <main>
            <Tecnology
            image = "../../images/html.png"
            title= "HTML"
            width= {95}/>
            <Tecnology
            image = "../../images/css.png"
            title= "CSS"
            width= {80}/>
            <Tecnology
            image = "../../images/js.png"
            title= "JavaScript"
            width= {75}/>
            <Tecnology
            image = "../../images/sass2.webp"
            title = "SASS"
            width= {80}/>
            <Tecnology
            image = "../../images/react.png"
            title= "React"
            width= {75}/>
            <Tecnology
            image = "../../images/nextjs.png"
            title= "Next JS"
            width= {60}/>
            <Tecnology
            image = "../../images/java.webp"
            title= "JAVA"
            width= {60}/>
            <Tecnology
            image = "../../images/springboot.png"
            title= "SpringBoot"
            width= {30}/>
            <Tecnology
            image = "../../images/python.webp"
            title= "Python"
            width= {90}/>
            <Tecnology
            image = "../../images/mysql.png"
            title= "MySql"
            width= {60}/>
        </main>
    )
}