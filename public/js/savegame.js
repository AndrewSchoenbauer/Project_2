const savedGameEl = document.getElementById("saved")
const saveGameHandler =  (event) => {
    event.preventDefault();
    const savedGamesList = JSON.parse(localStorage.getItem('savedgamelist')) || [];


    const gameId = event.target.dataset.gameid;
    const playerId = event.target.dataset.playerid;
    console.log(gameId,playerId);

    if(savedGamesList.length > 0){
        for (var i = 0; i < savedGamesList.length; i++) {
            console.log("hello for", savedGamesList[i], playerId);
            if(savedGamesList[i].playerId === playerId){
                console.log("hello if");
                document.location.replace('/game/' +gameId)
                savedGamesList[i].savedgames.push(gameId)
                // return;
                break;
            }
        }
    }else{
        console.log("hello else");
        savedGamesList.push({
            playerId,
            savedgames: [gameId]
        })    
    }


  console.log(savedGamesList);
  localStorage.setItem('savedgamelist', JSON.stringify(savedGamesList))

}
const renderSavedGames = async() => {
    const savedGamesList = JSON.parse(localStorage.getItem('savedgamelist'));
    const returnGame = await getSavedGames(savedGamesList[0].savedgames.join());
    savedGameEl.textContent = "";
    for (let i=0; i<returnGame.length; i++){
            const gameSaved = document.createElement("a");
            
            gameSaved.textContent = returnGame[i].name;
            gameSaved.setAttribute("href", `/game/${returnGame[i].id}`);
            gameSaved.setAttribute("class", "savedAnchor");
            gameSaved.setAttribute("value", returnGame[i].name);
            savedGameEl.append(gameSaved);
        }

    }

const getSavedGames = async (savedGameList) => {
console.log(savedGameList);
const response = await fetch('/savedgames/' +savedGameList)
    const dataGame = await response.json()
if (response.ok) {

    return dataGame;
}
}
     
     renderSavedGames();


 

document.querySelector('#save-btn').addEventListener('click', saveGameHandler)