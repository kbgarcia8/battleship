import {Ships} from "../factories/Ships.js";
import {Gameboard} from "../factories/Gameboard.js";
import {Player} from "../factories/Player.js";

const player1 = new Player("player")
const playerSpace = document.querySelector(".player-board")
const playerAddShipSpace = document.querySelector(".ships-container")
//console.log(player1.gameboard.gameboardArray)

class DOM {
    constructor(){
    }
    
    DOMGameboard (player, parent) {
        for(let x=0; x<player.gameboard.gameboardArray.length;x++){
            for(let y=0; y<player.gameboard.gameboardArray[x].length;y++){
                var board_node = document.createElement('DIV');
                board_node.setAttribute('class', `${player.name}-cell`);
                board_node.setAttribute('data-x', `${x}`);
                board_node.setAttribute('data-y', `${y}`);
                board_node.setAttribute('data-in', `${player.gameboard.gameboardArray[x][y]}`)
                parent.appendChild(board_node);
                //console.log(`YES ${x}, ${y}`)
            }
        }
    }
    DOMAddShips(player, parent){
        for(let i=0; i<player.gameboard.shipsArray.length;i++){
            let currShipName = player.gameboard.shipsArray[i].name
            const ship_container_node = document.createElement('DIV');
            ship_container_node.setAttribute('class', `${currShipName}-container horizontal`);
            ship_container_node.setAttribute('id', `${currShipName}`);
            ship_container_node.setAttribute('draggable', 'true');
            parent.appendChild(ship_container_node)
            for(let j=0; j<player.gameboard.shipsArray[i].length;j++){
                const ship_part_node = document.createElement('DIV');
                ship_part_node.setAttribute('class', `${currShipName}`);
                //ship_part_node.setAttribute('id', `${currShipName}`);
                ship_container_node.appendChild(ship_part_node)
            }
        }
    }
}

const createDOM = new DOM()
createDOM.DOMGameboard(player1,playerSpace)
createDOM.DOMAddShips(player1,playerAddShipSpace)
const tests = document.querySelectorAll(".player-cell")
tests.forEach(test => {
    //console.log(typeof(Number(test.getAttribute('data-x'))))
    //if((test.getAttribute("data-x") == 0) && (test.getAttribute("data-y") == 0)) console.log(test)
})