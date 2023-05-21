import Colaborador from "../Colaborador"
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuración
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores } = props

    const fondo = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={fondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {/* <Colaborador /> */}
            {
                colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} />)
            }
        </div>
    </section>
}

export default Equipo