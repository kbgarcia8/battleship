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
  });
  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("dropped")
    var data = e.dataTransfer.getData("text")
    //e.target.appendSibling(document.getElementById(data));
    //e.target.insertAdjacentElement("afterend", document.getElementById(data))
    //console.log(e.target.dataset.y)
  });
});
dragStarter(carrier);
