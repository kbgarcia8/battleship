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
}