import { useState, useEffect } from "react"
import Header from "./components/sections/Header"
import Formulario from "./components/forms/Formulario"
import ListadoPacientes from "./components/sections/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Va obtener lo que hay en localStorage para saber si hay algo y no borrar el arreglo de pacientes
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])



  const pacienteReomve = id => {
    const updatePacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(updatePacientes)
  }

  return (
    <div className="bg-gray-100 px-4 lg:px-16 py-8">
      <Header/>
      <div className="mt-12 md:flex gap-4">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          pacienteReomve={pacienteReomve}
        />
      </div>      
    </div>
  )
}

export default App
