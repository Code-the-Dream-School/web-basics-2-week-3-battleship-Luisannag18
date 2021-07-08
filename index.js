//function of battleship game
const battleship = () => {
  let player1 = {
    name: player1Name,
    shipCount: 0,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  let player2 = {
    name: player2Name,
    shipCount: 0,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  /*shipcount started as 0. in this function, random x,y coordinates will determine where the 4 ships will be placed. 
  an if statement is used to avoid the possibility of the random coordinates being the same meaning that if a random x,y coordinate is given twice, 
  the if statement will not allow another ship to be put in the same coordinate because instead of 4 ships, it will look like there is only 3 because there will be two in the same position.*/
  const shipAdd = (player) => {
    while (player.shipCount < 4) {
      let randomXpos = Math.floor(Math.random() * 4);
      let randomYpos = Math.floor(Math.random() * 4);

      if (player.gameBoard[randomXpos][randomYpos] === 0) {
        player.gameBoard[randomXpos][randomYpos] = 1;
        player.shipCount++;
        console.log(randomXpos, randomYpos); // for testing purposes ship coordinates are being displayed.
      }
    }
  };

  //call the function shippAdd to assign 4 ships to each player.
  shipAdd(player1);
  shipAdd(player2);

  /*this function determines whether the opposite player has a ship in the coordinates given by the current player in turn.
  if the player guessed where one of the ships was, it decreases the ship count of the other player. if there was no ship, it just tells you that you missed*/
  const findShip = (player) => {
    let userXpos = parseInt(prompt("Insert the X position between 0-3"));
    let userYpos = parseInt(prompt("Insert the Y position between 0-3"));

    if (player.gameBoard[userXpos][userYpos] === 1) {
      player.shipCount--;
      alert("Hit!");
      player.gameBoard[userXpos][userYpos] = 0;
    } else {
      alert("Miss!");
    }
  };

  //this is to give turns to each player and call the function to find the ship if as long as none of the ship counts is zero because then that means one of the players won.
  while (player1.shipCount !== 0 && player2.shipCount !== 0) {
    alert(`${player1.name}'s Turn`);
    findShip(player2);
    if (player2.shipCount === 0) {
      alert(`The winner is ${player1.name}!`);
      return;
    }

    alert(`${player2.name}'s Turn`);
    findShip(player1);

    if (player1.shipCount === 0) {
      alert(`The winner is ${player2.name}!`);
      return;
    }
  }
};

let player1Name = prompt("Insert player 1's name:");
let player2Name = prompt("Insert player 2's name:");
const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;
