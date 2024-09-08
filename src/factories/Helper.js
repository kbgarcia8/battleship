export class Helper {
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
}