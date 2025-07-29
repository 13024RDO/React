import { useState } from "react";
import data from "./data"
import { Lista } from "./Lista";

const App = () => {
  const [personas, setPersonas] = useState(data)
  
  return (
    <main>
      <section className="container">
          <h3>{personas.length} Personas cumplen años hoy</h3>
          <Lista personas={personas}/>
          <button type="button" className="btn btn-block" onClick={()=> setPersonas([])}>Borrar Todo</button>
      </section>
    </main>
  )
};
export default App;
