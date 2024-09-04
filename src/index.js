const carrier = document.querySelector("#carrier");

function dragStarter(element) {
  element.addEventListener("dragstart", (e) => {
    //set the target id as data for transfer
    e.dataTransfer.setData("text/plain", e.target.id);
  });
}

const cells = document.querySelectorAll(".player-cell");

cells.forEach((cell) => {
  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragged over")
  });
});
dragStarter(carrier);
