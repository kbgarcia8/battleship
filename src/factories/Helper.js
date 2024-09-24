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
      const children = element.childNodes;
      element.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("textID", e.target.id)
          e.dataTransfer.setData("textLength", children.length)
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
  changeOrientation(element) {
    element.addEventListener("dblclick", (e) => {
      e.preventDefault()
      if(element.classList.contains("horizontal")) {
        element.classList.remove("horizontal")
        element.classList.add("vertical")
      } else if (element.classList.contains("vertical")) {
        element.classList.remove("vertical")
        element.classList.add("horizontal")
      }
    })
  }
}