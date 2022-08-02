import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
// Components
import Header from "./components/Header";
import RecentSection from "./components/RecentSection";

function App() {
  const [driver, setDriver] = useState();

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/current/last/results.json")
      .then((res) => {
        setDriver(
          res.data.MRData.RaceTable.Races[0].Results[1].Driver.givenName +
            " " +
            res.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName
        );
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <RecentSection />
      <p>{driver}</p>
    </div>
  );
}

export default App;
