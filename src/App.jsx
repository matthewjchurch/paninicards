import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [response, setResponse] = useState("")
  const read = () => {
    return fetch("http://localhost:8080")
      .then(res => res.json())
      .then(res => setResponse(res))
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

        fetch("http://localhost:8080/delete", fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response))
  }

  // const testFunction = () => {
  //   e.preventDefault();
  //       const data = {
  //           name: document.getElementById("name").value,
  //       }
  //       const fetchOptions = {
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify(data),
  // //       }

  //       fetch("http://localhost:8080/create", fetchOptions)
  //           .then(response => response.json())
  //           .then(response => console.log(response))
  // // }

  useEffect(() => {
    read();
  }, [])

  return (
    <>
      <div className="App">
        {response ?
          <>
            <Card response={response} />
            <button onClick={() => read()}>Click to see another player!!!!</button>
          </> :
          <h1>Sorry, this api is wack</h1>
        }
      </div>
      <button onClick={deletePlayer}>Delete this player</button>
      <Form />
      {/* <button onClick={testFunction}></button> */}
    </>
  );
}

export default App;
