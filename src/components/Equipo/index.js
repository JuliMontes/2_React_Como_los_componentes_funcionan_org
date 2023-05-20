import Colaborador from "../Colaborador"
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuración
    const { titulo, colorPrimario, colorSecundario } = props.datos

    const fondo = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={fondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo