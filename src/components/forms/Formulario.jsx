import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [namePet, setNamePet] = useState('')
  const [nameOwner, setNameOwner] = useState('')
  const [email, setEmail] = useState('')
  const [dateIn, setDateIn] = useState('')
  const [symptom, setSymptom] = useState('')

  const [error, setError] = useState(false)

  //Para editar el paciente en el form
  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNamePet(paciente.namePet),
      setNameOwner(paciente.nameOwner),
      setEmail(paciente.email),
      setDateIn(paciente.dateIn),
      setSymptom(paciente.symptom)
    }
  }, [paciente])

  const generateID = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now()

    return random + date
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if([namePet, nameOwner, email, dateIn, symptom].includes('')) {
      setError(true)
      return
    } 
    setError(false)

    //creamos el arreglo u objeto
    const objetoPaciente = {
      namePet, 
      nameOwner, 
      email, 
      dateIn, 
      symptom
    }

    if(paciente.id) {
      //Modificando registro
      objetoPaciente.id = paciente.id
      const updatePaciente = pacientes.map( pacienteState =>  pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
    
      setPacientes(updatePaciente)
      setPaciente({})
    } else { 
      //Nuevo registro
      objetoPaciente.id = generateID()
      //Tomamos la copia del arreglo y le adicionamos el nuevo
      setPacientes([...pacientes, objetoPaciente])
    }
    

    //reiniciamos el form
    setNamePet('') 
    setNameOwner('') 
    setEmail('')
    setDateIn('') 
    setSymptom('')

    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-3xl">Seguimiento de pacientes</h2>
      <p className="text-2xl mb-5">Añade pacientes y <span className="text-indigo-600"> administralos</span></p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md py-10 px-5 rounded-md">          
        <div className="mb-8">
          <label htmlFor="namePet" className="block uppercase text-gray-700 font-bold mb-1">Nombre Mascota</label>
          <input 
            type="text" 
            name="namePet" 
            id="namePet" 
            placeholder="Nombre mascota"             
            className="border-b-2 w-full py-2 placeholder-gray-400 outline-transparent"
            value={namePet} 
            onChange={(e) => setNamePet(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="nameOwner" className="block uppercase text-gray-700 font-bold mb-1">Nombre propietario</label>
          <input 
            type="text" 
            name="nameOwner" 
            id="nameOwner" 
            placeholder="Nombre propietario" 
            className="border-b-2 w-full py-2 placeholder-gray-400 outline-transparent"
            value={nameOwner} 
            onChange={(e) => setNameOwner(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="nameEmail" className="block uppercase text-gray-700 font-bold mb-1">Email</label>
          <input 
            type="email" 
            name="nameEmail" 
            id="nameEmail" 
            placeholder="Email" 
            className="border-b-2 w-full py-2 placeholder-gray-400 outline-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="dateIn" className="block uppercase text-gray-700 font-bold mb-1">Fecha de ingreso</label>
          <input 
            type="date" 
            name="dateIn" 
            id="dateIn" 
            className="border-b-2 w-full py-2 placeholder-gray-400 outline-transparent"
            value={dateIn}
            onChange={(e) => setDateIn(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="symptom" className="block uppercase text-gray-700 font-bold mb-1">Sintomas</label>
          <input 
            type="textarea" 
            name="symptom" 
            id="symptom" 
            className="border-b-2 w-full py-2 placeholder-gray-400 outline-transparent"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          className="p-3 w-full text-white bg-indigo-600 uppercase hover:bg-indigo-800 cursor-pointer transition-colors"
          value={ paciente.id ? "Editar paciente" : "Ingresar paciente"  }
        />
        {
          //Pasando por props
          //error &&  <Error mensaje="Todos los campos son obligatorios"/>       
          
          //Pasando todos los children
          error && <Error><span className="text-red-500">Todos los campos son obligatorios </span><span>otro mensaje</span></Error>
        }
      </form>
    </div>
  )
}

export default Formulario

