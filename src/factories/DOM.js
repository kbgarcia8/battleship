import { Ships } from "../factories/Ships.js";
import { Gameboard } from "../factories/Gameboard.js";
import { Player } from "../factories/Player.js";

const player1 = new Player("player");
const playerSpace = document.querySelector(".player-board");
const playerAddShipSpace = document.querySelector(".ships-container");
//console.log(player1.gameboard.gameboardArray)

class DOM {
  constructor() {}

  DOMGameboard(player, parent) {
    for (let x = 0; x < player.gameboard.gameboardArray.length; x++) {
      for (let y = 0; y < player.gameboard.gameboardArray[x].length; y++) {
        var board_node = document.createElement("DIV");
        board_node.setAttribute("class", `${player.name}-cell`);
        board_node.setAttribute("data-x", `${x}`);
        board_node.setAttribute("data-y", `${y}`);
        board_node.setAttribute(
          "data-in",
          `${player.gameboard.gameboardArray[x][y]}`
        );
        parent.appendChild(board_node);
        //console.log(`YES ${x}, ${y}`)
      }
    }
  }
  DOMAddShips(player, parent) {
    for (let i = 0; i < player.gameboard.shipsArray.length; i++) {
      let currShipName = player.gameboard.shipsArray[i].name;
      const ship_container_node = document.createElement("DIV");
      ship_container_node.setAttribute(
        "class",
        `${currShipName}-container horizontal`
      );
      ship_container_node.setAttribute("id", `${currShipName}`);
      ship_container_node.setAttribute("draggable", "true");
      parent.appendChild(ship_container_node);
      for (let j = 0; j < player.gameboard.shipsArray[i].length; j++) {
        const ship_part_node = document.createElement("DIV");
        ship_part_node.setAttribute("class", `${currShipName}`);
        //ship_part_node.setAttribute('id', `${currShipName}`);
        ship_container_node.appendChild(ship_part_node);
      }
    }
  }
  DOMDropShip() {}
}

const createDOM = new DOM();
createDOM.DOMGameboard(player1, playerSpace);
createDOM.DOMAddShips(player1, playerAddShipSpace);

/*TEST FUNCTIONS*/
function checkOrientation(element) {
  let shipOrientation = null;
  if (element.classList.contains("horizontal")) {
    shipOrientation = "horizontal";
  } else {
    shipOrientation = "vertical";
  }
  return shipOrientation;
}
function dragStarter(element) {
  let currOrientation = checkOrientation(element);
  const children = element.childNodes;
  element.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("textID", e.target.id);
    e.dataTransfer.setData("textLength", children.length);
    e.dataTransfer.setData("textOrientation", currOrientation);
  });
}

const cells = document.querySelectorAll(".player-cell");

cells.forEach((cell) => {
  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("dropped");
    let acquiredID = e.dataTransfer.getData("textID");
    let acquiredLength = e.dataTransfer.getData("textLength");
    let acquiredOrientation = e.dataTransfer.getData("textOrientation");
    let x = Number(cell.dataset.x);
    let y = Number(cell.dataset.y);
    console.log([x, y]);
    console.log(cell.dataset, acquiredID, acquiredLength, acquiredOrientation);
    if(player1.gameboard.placeShip(acquiredID, [x,y], acquiredOrientation)) {
        console.log("possible")
        cell.classList.add(acquiredID);
        let i = 0;
        while (i < acquiredLength - 1) {
          cell = cell.nextSibling;
          cell.classList.add(acquiredID);
          i++;
        }
        //add here to remove ship once placed
    } else {
        console.log("Invalid placement")
    }
  });
});

const carrier = document.querySelector("#carrier");
const battleship = document.querySelector("#battleship");
const destroyer = document.querySelector("#destroyer");
const submarine = document.querySelector("#submarine");
const patrol_boat = document.querySelector("#patrol-boat");

dragStarter(carrier);
dragStarter(battleship);
dragStarter(destroyer);
dragStarter(submarine);
dragStarter(patrol_boat);
