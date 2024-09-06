import {Ships} from "../factories/Ships.js";
import {Gameboard} from "../factories/Gameboard.js";
import {Player} from "../factories/Player.js";

const player1 = new Player("player")
const playerSpace = document.querySelector(".player-board")
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
    DOMAddShips(){
        
    }
}

const createDOM = new DOM()
createDOM.DOMGameboard(player1,playerSpace)

const tests = document.querySelectorAll(".player-cell")
tests.forEach(test => {
    console.log(test.getAttribute("data-in"))
})