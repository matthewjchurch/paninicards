// export const addPlayer = () => {

//     const data = {
//         name: `${selectedPlayer.first_name} ${selectedPlayer.second_name}`,
//         playerID: selectedPlayer.id,
//         position: playerPosition(selectedPlayer.element_type),
//         img: document.getElementById("img").value
//     }

//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data),
//     }

//     fetch("https://sheltered-ocean-24674.herokuapp.com/create", fetchOptions)
//         .then(response => response.json())
//         .then(response => console.log(response))
// }

export const createNewUser = (user) => {
    console.log(user.uid);
    const data = {
        uid: user.uid
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }

    fetch("https://sheltered-ocean-24674.herokuapp.com/createUser", fetchOptions)
        .then(response => response.json())
        .then(response => console.log(response))
}