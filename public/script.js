let students = [];
let editId = null;

const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("search");
const totalStudents = document.getElementById("totalStudents");
const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const studentIdInput = document.getElementById("studentId");

async function fetchStudents() {
    try {
        showLoader(true);

        const res = await fetch("/students");
        students = await res.json();

        renderTable(students);
        updateDashboard();

        showLoader(false);
    } catch (err) {
        console.error(err);
        showToast("Error loading data", "error");
        showLoader(false);
    }
}

function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(student => {
        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.address}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${student.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

saveBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    const address = addressInput.value.trim();

    if (!name || !address) {
        showToast("Please fill all fields", "warning");
        return;
    }

    try {
        showLoader(true);

        if (editId) {
            await fetch(`/students/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, address })
            });

            showToast("Student Updated Successfully", "success");
        } else {
            await fetch("/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, address })
            });

            showToast("Student Added Successfully", "success");
        }

        nameInput.value = "";
        addressInput.value = "";
        editId = null;

        fetchStudents();

        showLoader(false);

        bootstrap.Modal.getInstance(document.getElementById("studentModal")).hide();
    } catch (err) {
        console.error(err);
        showToast("Operation Failed", "error");
        showLoader(false);
    }
});

async function editStudent(id) {
    const student = students.find(s => s.id === id);

    if (!student) return;

    editId = id;

    nameInput.value = student.name;
    addressInput.value = student.address;

    new bootstrap.Modal(document.getElementById("studentModal")).show();
}

async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
        showLoader(true);

        await fetch(`/students/${id}`, {
            method: "DELETE"
        });

        showToast("Student Deleted", "success");

        fetchStudents();

        showLoader(false);
    } catch (err) {
        console.error(err);
        showToast("Delete Failed", "error");
        showLoader(false);
    }
}

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(value) ||
        s.address.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

function updateDashboard() {
    totalStudents.innerText = students.length;
}

function showLoader(show) {
    let loader = document.querySelector(".loading-container");

    if (!loader) {
        loader = document.createElement("div");
        loader.className = "loading-container";
        loader.innerHTML = `<div class="loader"></div>`;
        document.body.appendChild(loader);
    }

    loader.style.display = show ? "flex" : "none";
}

function showToast(message, type = "success") {
    let toast = document.createElement("div");
    toast.className = `toast-box toast-${type}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

fetchStudents();