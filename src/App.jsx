import React, { useEffect, useState } from "react";
import { UserProvider } from "./context/UserContext";

import Routes from "./Routes";

function App() {
  const [initialCard, setInitialCard] = useState("");

  const read = () => {
    return fetch("https://sheltered-ocean-24674.herokuapp.com/")
      .then(res => res.json())
      .then(res => setInitialCard(res))
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
  }, [])

  return (
    <UserProvider> 
      <Routes initialCard={initialCard} />
    </UserProvider>
  );
}

export default App;
