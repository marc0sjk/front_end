import react, {useState} from "react";
import './index.css'
const Contador = () => {
    const [adicionar , setAdicionar] = useState (1)

const adicao = () => {
    setAdicionar(adicionar + 1)
}



return(
    <div>
    <p>{adicionar}</p>
    <button onClick={adicao}>+1</button>
    </div>
)
}
export default Contador;
