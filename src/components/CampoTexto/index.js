import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
    // const [valor, setValor] = useState("")
    // console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`

    const manerjarCambio = (e) => {
        // console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manerjarCambio}
        />
    </div>
}

export default CampoTexto