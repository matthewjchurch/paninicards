export const readFFPlayers = (setTotalTeams, setTotalPlayers) => {
    fetch("https://sheltered-ocean-24674.herokuapp.com/ffdata")
        .then(res => res.json())
        .then(res => {
            setTotalPlayers(res.players);
            setTotalTeams(res.teams);
            console.log(res);
        })
}

export const readFFFixtures = teamID => {

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
    fetch("http://localhost:8080/getTeamID", fetchOptions)
        .then(res => res.json())
        .then(res => console.log(res));
}