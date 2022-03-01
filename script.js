function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    console.log("hi");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
