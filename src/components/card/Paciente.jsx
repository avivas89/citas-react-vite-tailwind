const Paciente = ({paciente, setPaciente, pacienteReomve}) => {

  const {namePet, nameOwner, email, dateIn, symptom, id} = paciente

  const handleRemovePaciente = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')

    if(respuesta) {
      pacienteReomve(id)
    }
  }

  return (
   <div className="bg-white shadow-md py-10 px-5 rounded-md mb-5">
      <p className="uppercase text-gray-700 font-bold mb-3">
      Nombre: {''}
      <span className="font-normal normal-case">{namePet}</span>
      </p>
      <p className="uppercase text-gray-700 font-bold mb-3">
      Propietario: {''}
      <span className="font-normal normal-case">{nameOwner}</span>
      </p>
      <p className="uppercase text-gray-700 font-bold mb-3">
      Email: {''}
      <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="uppercase text-gray-700 font-bold mb-3">
      Fecha de Ingreso: {''}
      <span className="font-normal normal-case">{dateIn}</span>
      </p>      
      <p className="uppercase text-gray-700 font-bold mb-3">
      Sintomas: {''}
      <span className="font-normal normal-case">{symptom}</span>
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <button 
          type="button" 
          className="p-3 w-full md:w-50 bg-indigo-600 hover:bg-indigo-800 text-white uppercase cursor-pointer transition-colors"
          onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button 
          type="button" 
          className="p-3 w-full md:w-50 bg-red-600 hover:bg-red-800 text-white uppercase cursor-pointer transition-colors"
          onClick={handleRemovePaciente}
        >Eliminar</button>
      </div>

   </div>
  )
}

export default Paciente
