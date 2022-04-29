import Paciente from "../card/Paciente"

const ListadoPacientes = ({pacientes, setPaciente, pacienteReomve}) => {

  return (  
    <div className="md:w-1/2 lg:w-3/5">      
      {
        pacientes && pacientes.length ? 
        (
          <>
            <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>
            <p className="text-2xl mb-5 text-center">Administrar tus <span className="text-indigo-600"> Pacientes y Citas</span></p>
            <div className="container md:h-screen overflow-y-scroll mt-5">
              {
                pacientes.map(paciente => (            
                    <Paciente
                      key={paciente.id}
                      paciente = {paciente}
                      setPaciente={setPaciente}
                      pacienteReomve={pacienteReomve}
                    />            
                ))
              }
            </div>
          </>
        )
        : 
        (
          <>
          <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
          <p className="text-2xl mb-5 text-center">Agregar nuevos <span className="text-indigo-600"> pacientes</span> desde el formulario</p>
          </>
        )
        
      }    
      
      
    </div>
  )
}

export default ListadoPacientes
