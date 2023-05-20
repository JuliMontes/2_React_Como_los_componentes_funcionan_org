import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
// console.log(Header);

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto circuito --> condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de Equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  return (
    <div>
      {/* {Header()}
      <Header></Header> */}
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <></>} */}
      { mostrarFormulario && <Formulario equipos={equipos.map( (equipo) => equipo.titulo)} /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
    </div>
  );
}

export default App;
