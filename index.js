const table = document.getElementById("initiativeTable");

function addRow(initiativeCount, creatureName, health, effects, engagements) {
    let newRow = table.insertRow(-1);
    newRow.insertCell(0).innerHTML = initiativeCount;
    newRow.insertCell(1).innerHTML = creatureName;
    newRow.insertCell(2).innerHTML = health;
    newRow.insertCell(3).innerHTML = effects;
    newRow.insertCell(4).innerHTML = engagements;
}