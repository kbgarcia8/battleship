class DOM {
  constructor() {}

  DOMGameboard(player, parent) {
    for (let x = 0; x < player.gameboard.gameboardArray.length; x++) {
      for (let y = 0; y < player.gameboard.gameboardArray[x].length; y++) {
        var board_node = document.createElement("DIV")
        board_node.setAttribute("class", `${player.name}-cell`)
        board_node.setAttribute("data-x", `${x}`)
        board_node.setAttribute("data-y", `${y}`)
        board_node.setAttribute(
          "data-in",
          `${player.gameboard.gameboardArray[x][y]}`
        )
        parent.appendChild(board_node)
      }
    }
  }
  DOMAddShips(player, parent) {
    for (let i = 0; i < player.gameboard.shipsArray.length; i++) {
      let currShipName = player.gameboard.shipsArray[i].name;
      const ship_container_node = document.createElement("DIV")
      ship_container_node.setAttribute(
        "class",
        `${currShipName}-container horizontal`
      )
      ship_container_node.setAttribute("id", `${currShipName}`)
      ship_container_node.setAttribute("draggable", "true")
      parent.appendChild(ship_container_node)
      for (let j = 0; j < player.gameboard.shipsArray[i].length; j++) {
        const ship_part_node = document.createElement("DIV")
        ship_part_node.setAttribute("class", `${currShipName}`)
        //ship_part_node.setAttribute('id', `${currShipName}`)
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
        console.log("dropped")
        let acquiredID = e.dataTransfer.getData("textID")
        let acquiredLength = e.dataTransfer.getData("textLength")
        let acquiredOrientation = e.dataTransfer.getData("textOrientation")
        let x = Number(cell.dataset.x)
        let y = Number(cell.dataset.y)
        console.log([x, y])
        console.log(cell.dataset, acquiredID, acquiredLength, acquiredOrientation)
        if(player1.gameboard.placeShip(acquiredID, [x,y], acquiredOrientation)) {
            console.log("possible")
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
        } else {
            alert("Invalid placement")
        }
      })
    })
  }
}




