import { useEffect, useState } from "react"
import TripList from "./components/TripList";
import Title from "./components/Title";

function App() {
  const [trips, setTrips] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTrips(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  console.log(trips);


  return <div>
    <Title />
    <TripList trips={trips}/>
  </div>;
}

export default App