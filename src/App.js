import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [driver, setDriver] = useState("");
  // const [driver, setDriver] = useState("");

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/current/last/results.json")
      .then((res) => {
        setDriver(
          res.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName +
            " " +
            res.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName
        );
        console.log(
          res.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName +
            " " +
            res.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName
        );
      });
  }, []);

  // fetch("http://ergast.com/api/f1/current/last/results.json", {
  //   method: "GET",
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     // console.log(data.MRData.RaceTable.Races[0].Results[0].Driver.driverId);
  //     console.log(data.MRData.RaceTable.Races[0]);
  //   });

  // const driver =

  return (
    <div className="container mx-auto">
      <Header />
      <p>1st place goes to: {driver}</p>
    </div>
  );
}

export default App;
