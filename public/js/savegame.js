// const savedGamesList = []
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

document.querySelector('#save-btn').addEventListener('click', saveGameHandler)