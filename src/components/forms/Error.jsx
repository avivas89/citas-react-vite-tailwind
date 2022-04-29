/*const Error = ({mensaje}) => {
  return (  
      <div className="mt-2">
         <span className="text-red-500">{mensaje}</span>
      </div>  
  )
}

export default Error*/

//2da forma de hacerlo pasandoles todos los children
const Error = ({children}) => {
   return (  
       <div className="mt-2">
          {children}
       </div>  
   )
 }
 
 export default Error
