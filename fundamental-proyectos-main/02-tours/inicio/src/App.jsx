import { useEffect, useState } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async() => {
    setIsLoading(true)
    try {
      const response = await fetch ('/api/react-tours-project');
      const tours = await response.json();
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])
  

  return <h2>Tours</h2>;
};
export default App;
