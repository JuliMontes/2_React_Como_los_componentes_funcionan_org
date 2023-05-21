import Colaborador from "../Colaborador"
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuración
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    // console.log(colaboradores.length > 0)

    const fondo = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <> 
        { colaboradores.length > 0 && 
            < section className = "equipo" style = { fondo } >
                <input 
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange={(evento) => {
                        // console.log(evento.target.value)
                        actualizarColor(evento.target.value, titulo)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {/* <Colaborador /> */}
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />)
                    }
                </div>
            </section >
        }
    </>
}

export default Equipo