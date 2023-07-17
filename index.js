const table = document.getElementById("initiativeTable");
const initiativeCountInput = document.getElementById("initiativeCount");
const creatureNameInput = document.getElementById("creatureName");
const healthInput = document.getElementById("health");
const effectsInput = document.getElementById("effects");

function addRow() {
    let newRow = table.insertRow(-1);
    newRow.insertCell(0).innerHTML = initiativeCountInput.value;
    newRow.insertCell(1).innerHTML = creatureNameInput.value;
    newRow.insertCell(2).innerHTML = healthInput.value;
    newRow.insertCell(3).innerHTML = effectsInput.value;
    newRow.insertCell(4).innerHTML = "-";
}

function clearInputs() {
    initiativeCountInput.value = "";
    creatureNameInput.value = "";
    healthInput.value = "";
    effectsInput.value = "";
}