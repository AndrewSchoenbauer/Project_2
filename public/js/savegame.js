
const savedGamesList = JSON.parse(localStorage.getItem('savedgamelist')) || [];
const savedGameEl = document.getElementById("saved")
const saveGameHandler =  (event) => {
    event.preventDefault();



    const gameId = event.target.dataset.gameid;
    const playerId = event.target.dataset.playerid;
    console.log(gameId,playerId);

    if(savedGamesList.length > 0){
        for (var i = 0; i < savedGamesList.length; i++) {
            console.log("hello for", savedGamesList[i], playerId);
            if(savedGamesList[i].playerId === playerId){
                console.log("hello if");
                savedGamesList[i].savedgames.push(gameId)
                // return;
                break;
            }
            // else{
                // console.log('new player else');
                // savedGamesList.push({
                //     playerId,
                //     savedgames: [gameId]
                // })
                // break;
            // }
        }
    }else{
        console.log("hello else");
        savedGamesList.push({
            playerId,
            savedgames: [gameId]
        })
    //   savedGamesList[i].playerId = playerId;
    //   savedGamesList[i].savedgames=[gameId]      
    }


  console.log(savedGamesList);
  localStorage.setItem('savedgamelist', JSON.stringify(savedGamesList))

}
const renderSavedGames = () => {
    savedGameEl.textContent = "";
    for (let i=0; i<savedGamesList.length; i++){
        for (let i=0; i<savedGamesList[i].savedgames.length; i++) {
            const cityHistory = document.createElement("input");
            cityHistory.setAttribute("type","text");
            cityHistory.setAttribute("readonly",true);
            cityHistory.setAttribute("class", "form-control d-block font-weight-bold border border-dark rounded bg-$cyan-200 mt-2");
            cityHistory.setAttribute("value", savedGamesList[i].savedgames);
            // cityHistory.addEventListener("click",function() {
            //     getWeather(cityHistory.value);
            //     getFivedayWeather(cityHistory.value);
            //     console.log(cityHistory.value);
            // })
            console.log(cityHistory);
            savedGameEl.append(cityHistory);
        }

    }
     }
     renderSavedGames();
    //  if (searchHistory.length > 0) {
    //      getWeather(searchHistory[searchHistory.length - 1])
    //      getFivedayWeather(searchHistory[searchHistory.length - 1])
    //  }
    

 

document.querySelector('#save-btn').addEventListener('click', saveGameHandler)