import React, { useEffect, useState, useContext } from "react";
import { UserProvider, UserContext } from "./context/UserContext";
import Routes from "./Routes";

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
    <UserProvider> 
      <Routes initialCard={initialCard} totalPlayers={totalPlayers} totalTeams={totalTeams} />
    </UserProvider>
  );
}

export default App;
