class DOM {
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
  DOMRandomDropShips(ship,cells){
    while(true) {
      let x = Math.floor(Math.random()*10)
      let y = Math.floor(Math.random()*10)
      let coords = [x,y]
      let orientaions = ['horizontal', 'vertical']
      let randomOrientation = orientaions[Math.floor(Math.random() * orientaions.length)]
      
      if(this.player.gameboard.placeShip(ship.name,coords,randomOrientation)) {
        //put here process on how to reflect ships in game board (do it per ship)
        console.log(`Initial position at [${x},${y}] ${randomOrientation}ly`)
        cells.forEach((cell) => {
          if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == "horizontal")) {
            cell.setAttribute("data-in", ship.name)
            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
            cell.classList.add(ship.name)
            let i = 0;
            while (i < ship.length - 1) {
              cell = cell.nextSibling;
              cell.setAttribute("data-in", ship.name)
              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
              cell.classList.add(ship.name)
              i++;
            }
          } else if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == "vertical")) {
            cell.setAttribute("data-in", ship.name)
            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
            cell.classList.add(ship.name)
            let i = 0;
            while (i < ship.length - 1) {
              cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling
              cell.setAttribute("data-in", ship.name)
              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
              cell.classList.add(ship.name)
              i++;
            }
          }
        })
        break
      }
    }    
  }
  DOMUpdateGameboard(player,playerCells) {
    playerCells.forEach((playerCell) => {
      let x = playerCell.dataset.x
      let y = playerCell.dataset.y
      playerCell.setAttribute('data-in', `${player.gameboard.gameboardArray[x][y]}`)
      if(player.gameboard.gameboardArray[x][y] == "miss") {
        playerCell.textContent = "X"
        playerCell.setAttribute('style','background-color: #87aeed;')
      } else if(player.gameboard.gameboardArray[x][y] == "X") {
        playerCell.textContent = "X"
        playerCell.setAttribute('style','background-color: #f55858; border:white 1px solid')
      }
    })
    console.log("Gameboard updated")
  }
}