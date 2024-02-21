class Student {
    constructor(id, name, dob, className, gpa) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.className = className;
        this.gpa = gpa;
    }
}
var students = [];
var numStudents;

function submitNumStudents() {
    var numStudents = document.getElementById("numStudents").value;
    var studentFields = document.getElementById("studentFields");
    var studentContainer = document.getElementById("studentContainer");

    // Clear previous student fields
    studentContainer.innerHTML = '';

    // Generate input fields for each student
    for (var i = 1; i <= numStudents; i++) {
        var studentDiv = document.createElement("div");

        var studentIdLabel = document.createElement("label");
        studentIdLabel.textContent = "Mã SV " + i + ": ";
        var studentIdInput = document.createElement("input");
        studentIdInput.type = "text";
        studentIdInput.name = "studentId" + i;

        var fullNameLabel = document.createElement("label");
        fullNameLabel.textContent = "Họ và tên " + i + ": ";
        var fullNameInput = document.createElement("input");
        fullNameInput.type = "text";
        fullNameInput.name = "fullName" + i;

        var dobLabel = document.createElement("label");
        dobLabel.textContent = "Ngày tháng năm sinh " + i + ": ";
        var dobInput = document.createElement("input");
        dobInput.type = "date";
        dobInput.name = "dob" + i;

        var classLabel = document.createElement("label");
        classLabel.textContent = "Lớp học " + i + ": ";
        var classInput = document.createElement("input");
        classInput.type = "text";
        classInput.name = "class" + i;

        var gpaLabel = document.createElement("label");
        gpaLabel.textContent = "Điểm GPA " + i + ": ";
        var gpaInput = document.createElement("input");
        gpaInput.type = "number";
        gpaInput.step = "0.01";
        gpaInput.min = "0";
        gpaInput.max = "4";
        gpaInput.name = "gpa" + i;

        studentDiv.appendChild(studentIdLabel);
        studentDiv.appendChild(studentIdInput);
        studentDiv.appendChild(fullNameLabel);
        studentDiv.appendChild(fullNameInput);
        studentDiv.appendChild(dobLabel);
        studentDiv.appendChild(dobInput);
        studentDiv.appendChild(classLabel);
        studentDiv.appendChild(classInput);
        studentDiv.appendChild(gpaLabel);
        studentDiv.appendChild(gpaInput);

        studentContainer.appendChild(studentDiv);
    }

    // Show the student fields container
    studentFields.style.display = "block";
}

function submitStudents() {
    var studentContainers = document.querySelectorAll("#studentContainer > div");


    // Retrieve student information
    studentContainers.forEach(function(container) {
        var id = container.querySelector("input[name^='studentId']").value;
        var name = container.querySelector("input[name^='fullName']").value;
        var dob = container.querySelector("input[name^='dob']").value;
        var className = container.querySelector("input[name^='class']").value;
        var gpa = container.querySelector("input[name^='gpa']").value;

        // Create a new Student instance
        var student = new Student(id, name, dob, className, gpa);
        students.push(student);
    });

    // Display student information
    var displayArea = document.getElementById("studentInfoDisplay");
    displayArea.innerHTML = ""; // Clear previous display

    for (var j = 0; j < students.length; j++) {
        var studentInfo = document.createElement("p");
        studentInfo.innerHTML = "Student " + (j + 1) + ": <br>" +
            "ID: " + students[j].id + "<br>" +
            "Name: " + students[j].name + "<br>" +
            "DOB: " + students[j].dob + "<br>" +
            "Class: " + students[j].className + "<br>" +
            "GPA: " + students[j].gpa;
        displayArea.appendChild(studentInfo);
    }
}

function displayStudentInfo() {
    var displayArea = document.getElementById("studentInfoDisplay");
    displayArea.innerHTML = ""; // Clear previous display

    // Retrieve student information from the 'students' array
    var studentsInfo = "";
    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        // Concatenate student information
        studentsInfo += "Student " + (i + 1) + ":<br>" +
            "ID: " + student.id + "<br>" +
            "Name: " + student.name + "<br>" +
            "DOB: " + student.dob + "<br>" +
            "Class: " + student.className + "<br>" +
            "GPA: " + student.gpa + "<br><br>";
    }

    // Display student information
    displayArea.innerHTML = studentsInfo;
}

// Function to clear all student information
function clearStudents() {
    // Reset the students array
    students = [];

    // Clear the student info display area
    var displayArea = document.getElementById("studentInfoDisplay");
    displayArea.innerHTML = "";
}

function editStudent() {
    var idToEdit = prompt("Nhập mã SV của sinh viên cần sửa:");
    if (!idToEdit) return; // Cancel button clicked or no input provided

    // Find the student with the provided ID
    var studentToEdit = students.find(function(student) {
        return student.id === idToEdit;
    });

    if (!studentToEdit) {
        alert("Không tìm thấy sinh viên có mã SV là " + idToEdit);
        return;
    }

    // Prompt the user to enter the new information for the student
    var newName = prompt("Nhập tên mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.name);
    if (newName !== null) { // Prompt wasn't canceled
        studentToEdit.name = newName;
    }

    var newClass = prompt("Nhập lớp mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.className);
    if (newClass !== null) { // Prompt wasn't canceled
        studentToEdit.className = newClass;
    }

    var newDOB = prompt("Nhập ngày tháng năm sinh mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.dob);
    if (newDOB !== null) { // Prompt wasn't canceled
        studentToEdit.dob = newDOB;
    }

    var newGPA = prompt("Nhập điểm GPA mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.gpa);
    if (newGPA !== null) { // Prompt wasn't canceled
        studentToEdit.gpa = newGPA;
    }

    displayStudentInfo(); // Update the displayed information
}
