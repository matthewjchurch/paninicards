import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [initialCard, setInitialCard] = useState("");
  const [totalPlayers, setTotalPlayers] = useState([]);
  const [totalTeams, setTotalTeams] = useState([]);

  const read = () => {
    return fetch("https://sheltered-ocean-24674.herokuapp.com/")
      .then(res => res.json())
      .then(res => setInitialCard(res))
  }

  const readFF = () => {
    fetch("https://sheltered-ocean-24674.herokuapp.com/ffdata")
      .then(res => res.json())
      .then(res => {
        setTotalPlayers(res.players);
        setTotalTeams(res.teams);
        console.log(res.players);
      })
  }

  const deletePlayer = () => {
    const data = {
            name: document.getElementById("current-player").innerText,
        }
        const fetchOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        fetch("https://sheltered-ocean-24674.herokuapp.com/delete", fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response))
  }

  useEffect(() => {
    read();
    readFF();
  }, [])

  return (
    <>
      <div className="App">
        {initialCard ?
          <>
            <Card response={initialCard} totalPlayers={totalPlayers} />
            <button onClick={() => read()}>Click to see another player!!!!</button>
          </> :
          <h1>Hold on while we load the data...</h1>
        }
      </div>
      <button onClick={deletePlayer}>Delete this player</button>
      <Form totalTeams={totalTeams} totalPlayers={totalPlayers} />
    </>
  );
}

export default App;
