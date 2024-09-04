const carrier = document.querySelector("#carrier");

function dragStarter(element) {
    element.addEventListener("dragstart", (e) => {
        //set the target id as data for transfer
      e.dataTransfer.setData("text/plain", e.target.id);
    });
}



dragStarter(carrier)