export class DOM {
  constructor(player, helper) {
    this.player = player,
    this.helper = helper
  }

  DOMGameboard(parent) {
    for (let x = 0; x < this.player.gameboard.gameboardArray.length; x++) {
      for (let y = 0; y < this.player.gameboard.gameboardArray[x].length; y++) {
        var board_node = document.createElement("DIV")
        board_node.setAttribute("class", `${this.player.name}-cell`)
        board_node.setAttribute("data-x", `${x}`)
        board_node.setAttribute("data-y", `${y}`)
        board_node.setAttribute("data-in",`${this.player.gameboard.gameboardArray[x][y]}`)
        parent.appendChild(board_node)
      }
    }
  }
  DOMAddShips(parent) {
    for (let i = 0; i < this.player.gameboard.shipsArray.length; i++) {
      let currShipName = this.player.gameboard.shipsArray[i].name;
      const ship_container_node = document.createElement("DIV")
      ship_container_node.setAttribute("class",`${currShipName}-container horizontal`)
      ship_container_node.setAttribute("id", `${currShipName}`)
      ship_container_node.setAttribute("draggable", "true")
      parent.appendChild(ship_container_node)
      for (let j = 0; j < this.player.gameboard.shipsArray[i].length; j++) {
        const ship_part_node = document.createElement("DIV")
        ship_part_node.setAttribute("class", `${currShipName}`)
        ship_container_node.appendChild(ship_part_node)
      }
    }
  }
  DOMDropShips(cells) {
    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault()
      })
      cell.addEventListener("drop", (e) => {
        e.preventDefault()        
        let acquiredID = e.dataTransfer.getData("textID")
        let acquiredLength = e.dataTransfer.getData("textLength")
        let currentElement = document.querySelector(`#${acquiredID}`)
        let acquiredOrientation = this.helper.checkOrientation(currentElement)
        let x = Number(cell.dataset.x)
        let y = Number(cell.dataset.y)
        //console.log([x, y])
        //console.log(cell.dataset, acquiredID, acquiredLength, acquiredOrientation)
        const checkPlacement = this.player.gameboard.placeShip(acquiredID, [x,y], acquiredOrientation)
        if(checkPlacement && acquiredOrientation == "horizontal") {
            console.log("Horizontal placement is possible")
            cell.setAttribute("data-in", acquiredID)
            cell.classList.add(acquiredID)
            let i = 0;
            while (i < acquiredLength - 1) {
              cell = cell.nextSibling;
              cell.setAttribute("data-in", acquiredID)
              cell.classList.add(acquiredID)
              i++;
            }
            let element = document.querySelector(`.${acquiredID}-container`)
            element.remove()
        } else if (checkPlacement && acquiredOrientation == "vertical") {//resolve else if why placeShip is being executed twice
          console.log("Vertical placement is possible")
          cell.setAttribute("data-in", acquiredID)
          cell.classList.add(acquiredID)
          let i = 0;
          while (i < acquiredLength - 1) {
            cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling
            cell.setAttribute("data-in", acquiredID)
            cell.classList.add(acquiredID)
            i++;
          }
          let element = document.querySelector(`.${acquiredID}-container`)
          element.remove()
        } else {
            console.log("Invalid placement")
        }
      })
    })
  }
}