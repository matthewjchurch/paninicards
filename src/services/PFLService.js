export const readFFPlayers = (setTotalTeams, setTotalPlayers) => {
    fetch("https://sheltered-ocean-24674.herokuapp.com/ffdata")
        .then(res => res.json())
        .then(res => {
            setTotalPlayers(res.players);
            setTotalTeams(res.teams);
        })
}

export const convertTeamID = async teamID => {

    if (teamID === "AVL") teamID = "AST";
    if (teamID === "SHU") teamID = "SHE";
    
    const data = {
        id: teamID
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const convertedID = await fetch("https://sheltered-ocean-24674.herokuapp.com/getTeamID", fetchOptions)
        .then(res => res.json())
        .then(res => res);
    
    return convertedID;
}

export const readFFFixtures = teamID => {

    const data = {
        id: teamID
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("https://sheltered-ocean-24674.herokuapp.com/getTeamFixtures", fetchOptions)
        .then(res => res.json())
        .then(res => res);
}