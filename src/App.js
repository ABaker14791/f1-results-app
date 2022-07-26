function App() {
  fetch("http://ergast.com/api/f1/current/last/results.json", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.MRData.RaceTable.Races[0].Results[0].Driver.driverId);
    });

  // const driver =

  return (
    <div>
      <h1>F1 Results App</h1>
      {/* <p>1st place goes to: {driver}</p> */}
    </div>
  );
}

export default App;
