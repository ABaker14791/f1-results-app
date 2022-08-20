import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

// Components
import Header from "./components/Header";

const baseURL = "http://ergast.com/api/f1/current/last/results.json";

function App() {
  const [drivers, setDrivers] = useState(null);
  // const [circuit, setCircuit] = useState(null);

  useEffect(() => {
    async function getDriver() {
      const res = await axios.get(baseURL);
      const driverArray = res.data.MRData.RaceTable.Races[0].Results;
      const recentCircuit = res.data.MRData.RaceTable.Races[0];
      setDrivers(
        driverArray.map(function (driver, id) {
          return (
            <div
              key={id}
              className="container mx-auto max-w-2xl flex justify-between border-2 p-2"
            >
              <p>Position: {driver.position}</p>
              <p className="mx-12">
                {" " + driver.Driver.givenName + " "}
                {driver.Driver.familyName}
              </p>
              <p className="text-right">{driver.Constructor.name}</p>
            </div>
          );
        })
      );
      console.log(recentCircuit);
      console.log(driverArray);
    }
    getDriver();
  }, []);

  if (!drivers) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div>{drivers}</div>
    </div>
  );
}

export default App;
