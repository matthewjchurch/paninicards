export const addPlayer = (data) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }

    return fetch("https://sheltered-ocean-24674.herokuapp.com/addPlayer", fetchOptions)
        .then(response => response.json())
        .then(response => response)
}

export const removePlayer = (user, playerID) => {
    const data = {
        id: playerID,
        uid: user.uid
    }

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch("https://sheltered-ocean-24674.herokuapp.com/removePlayer", fetchOptions)
        .then(response => response.json())
        .then(response => response)
}

export const createNewUser = (user) => {
    const data = {
        uid: user.uid
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch("https://sheltered-ocean-24674.herokuapp.com/createUser", fetchOptions)
        .then(response => response.json())
        .then(response => response)
}

export const getWatchlist = (user) => {
    const data = {
        uid: user.uid
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("https://sheltered-ocean-24674.herokuapp.com/getWatchlist", fetchOptions)
        .then(res => res.json())
        .then(res => res[0].watchlist)
}