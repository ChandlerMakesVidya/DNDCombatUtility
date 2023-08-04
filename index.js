const table = document.getElementById("initiativeTable");
const inputForm = document.getElementById("inputForm");
const initiativeCountInput = document.getElementById("initiativeCount");
const creatureNameInput = document.getElementById("creatureName");
const healthInput = document.getElementById("health");
const effectsInput = document.getElementById("effects");
const inputErrorMessage = document.getElementById("inputErrorMessage");

inputForm.addEventListener("submit", stopRefresh, false);

function stopRefresh(event) {
  event.preventDefault();
}

function addRow() {
  inputErrorMessage.style.opacity = 0;
  if (
    isNaN(Number(initiativeCountInput.value)) ||
    isNaN(Number(healthInput.value)) ||
    initiativeCountInput.innerHTML === ""
  ) {
    inputErrorMessage.style.opacity = 1;
    return;
  }

  let newRow = table.insertRow(-1);
  newRow.insertCell(0).innerHTML = initiativeCountInput.value;
  newRow.insertCell(1).innerHTML = creatureNameInput.value;
  newRow.insertCell(2).innerHTML = healthInput.value;
  newRow.insertCell(3).innerHTML = effectsInput.value;
  newRow.insertCell(4).innerHTML = "-";

  inputForm.reset();
  initiativeCountInput.focus();
  sortTable();
}

function sortTable() {
  let rows, switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    console.log(rows);
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = Number(rows[i].getElementsByTagName("td")[0].innerHTML);
      y = Number(rows[i + 1].getElementsByTagName("td")[0].innerHTML);
      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// testing if jquery works
/*window.onload = () => {
    if (window.jQuery) {
        alert("YEAH!");
    } else {
        alert("SHIT");
    }
}*/
