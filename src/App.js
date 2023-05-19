import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg';
// console.log(Header);

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Corto circuito --> condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      {/* {Header()}
      <Header></Header> */}
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <></>} */}
      { mostrarFormulario && <Formulario /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
