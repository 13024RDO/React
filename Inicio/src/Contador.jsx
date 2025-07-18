import { useState } from "react"

export const Contador = ({valor}) => {

const [contador, setcontador] = useState(valor)

   const Incrementar  = () =>{
       setcontador(contador + 1)
   }

  return (
    <div>
     <h1>Contador</h1>
     <h3>{contador}</h3>
     <hr />

     <button onClick = {Incrementar} >
        Incrementar
     </button>
    </div>
  )
}
