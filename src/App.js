import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
// Components
import Header from "./components/Header";
import RecentSection from "./components/RecentSection";

function App() {
  const [driver, setDriver] = useState({});

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/current/last/results.json")
      .then((res) => {
        setDriver({
          name:
            res.data.MRData.RaceTable.Races[0].Results[1].Driver.givenName +
            " " +
            res.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName,
          position: res.data.MRData.RaceTable.Races[0].Results[1].position,
          constructor:
            res.data.MRData.RaceTable.Races[0].Results[1].Constructor.name,
          circuit: res.data.MRData.RaceTable.Races[0].raceName,
          date: res.data.MRData.RaceTable.Races[0].date,
        });
        console.log(res.data.MRData.RaceTable.Races[0]);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <RecentSection />
      <p>Date: {driver.date}</p>
      <p>Circuit: {driver.circuit}</p>
      <p>Name: {driver.name}</p>
      <p>Position: {driver.position}</p>
      <p>Constructor: {driver.constructor}</p>
    </div>
  );
}

export default App;
