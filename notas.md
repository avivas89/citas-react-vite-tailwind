## Props

Los props son para pasar valores entre componentes, siempre deben pasarse del padre a hijo

###### App.js
```
function App() {

   const fn = () => {
      console.log('hola')
   }

   return (
      <Header 
         props1 = {Hola}
         props2 = {true}
         props3 = {fn}
      />
   )   
}
```

###### Header.js

```
function Header({props1, props2, props3}) {  
   return (
      <div>
         <p><b>Props1: </b>{props1}</p>
         <p><b>Props3: </b>{props2}</p>
         <p><b>Props3: </b>{props3}</p>
      </div>
   )   
}
```

También hay casos en los que se puede pasar un valor del hijo al padre

###### App.js
```
function App() {

   const recibeValor = (valor) => {
      console.log(valor)
   }

   return (
      <Header 
         props1 = {Hola}
         props2 = {true}
         recibeValor = {recibeValor}
      />
   )   
}
```

###### Header.js

```
function Header({props1, props2, recibeValor}) { 

   const variableHeader = true

   //Este valor lo mostrara en consola
   recibeValor(variableHeader) 
   
   return (
      <div>
         <p><b>Props1: </b>{props1}</p>
         <p><b>Props3: </b>{props2}</p>
      </div>
   )   
}
```

## useEffect

Es un callback, se ejecuta cuando un state cambia o cuando el componente esta listo
En un sustituto del componentDidMount() y el componentDidUpdate()

   ### Usos de useEffect
   Al ejecutarse automáticamente cunado el componente esta listo, es un excelente lugar para colocar código para consultar una API o LocalStorage

  * El [] al final de la funciona son las dependencias que esta esperando se ejecuten para renderizar
  * Si la [] dependencia vacia, el useEffect solo se ejecuta una vez

```
useEffect(() => {
   console.log('El componente esta listo')
}, [])
```

## LocalStorage

En localStorage no puedes guardar arreglos, solo strings, debes convertir el arreglo a un string con JSON.stringify(arreglo)

para convertir de un string a arreglo es con JSON.parse(string)

## Netlify

Para subir el proyecto de react y publicarlo
