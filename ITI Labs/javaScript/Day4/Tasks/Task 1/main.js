const nameError = document.getElementById("nameError");
const idError = document.getElementById("idError");
const ageError = document.getElementById("ageError");


function addStudent() {
    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("studentId").value.trim();
    const age = document.getElementById("age").value.trim();

    nameError.textContent = "";
    idError.textContent = "";
    ageError.textContent = "";

    let valid = true;

    if (!name) {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    if (!id) {
        idError.textContent = "ID is required.";
        valid = false;
    } else {
        const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
        console.log(document.getElementById("studentTable").getElementsByTagName("tbody")[0]);
        for (let i = 0; i < table.rows.length; i++) {
            if (table.rows[i].cells[1].textContent === id) {
                idError.textContent = "ID already exists.";
                valid = false;
                break;
            }
        }
    }

    if (!age) {
        ageError.textContent = "Age is required.";
        valid = false;
    } else if (isNaN(age) || Number(age) <= 0) {
        ageError.textContent = "Enter a valid age.";
        valid = false;
    }

    if (!valid) return;

    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${id}</td><td>${age}</td><td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>`;
    table.appendChild(newRow);

    document.getElementById("name").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("age").value = "";
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}