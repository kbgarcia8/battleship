class Helper {
  checkOrientation(element) {
      let shipOrientation = null;
      if (element.classList.contains("horizontal")) {
        shipOrientation = "horizontal";
      } else {
        shipOrientation = "vertical";
      }
      return shipOrientation;
    }
  dragShip(element) {
      let currOrientation = this.checkOrientation(element)
      const children = element.childNodes;
      element.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("textID", e.target.id)
          e.dataTransfer.setData("textLength", children.length)
          e.dataTransfer.setData("textOrientation", currOrientation)
    })
  }
  IsAllShipsPlaced(container) {
    const containerChildren = container.childNodes
    if(containerChildren.length == 0) {
      return true
    } else {
      return false
    }
  }
  startGame(button,container,containerParent,AIContainer){
    button.addEventListener("click", (e) => {
      if(this.IsAllShipsPlaced(container)) {
        containerParent.setAttribute("style", 'display: none;')
        AIContainer.setAttribute("style", 'display: flex;')
      }        
    })
  }
}