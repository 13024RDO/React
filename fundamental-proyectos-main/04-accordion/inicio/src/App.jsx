import { useState } from "react";
import {Question} from "./Question"
import data from "./data"

const App = () => {

  const [question, setQuestion] = useState(data)

  return <main>
      <Question question={question}/>
    </main>
};
export default App;
