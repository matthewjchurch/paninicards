export const readFF = (setTotalTeams, setTotalPlayers) => {
    fetch("https://sheltered-ocean-24674.herokuapp.com/ffdata")
        .then(res => res.json())
        .then(res => {
            setTotalPlayers(res.players);
            setTotalTeams(res.teams);
            console.log(res.players);
        })
}