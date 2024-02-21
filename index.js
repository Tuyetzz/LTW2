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
    var numStudents = document.getElementById("numStudents").value;

    // Retrieve student information
    for (var i = 1; i <= numStudents; i++) {
        var id = document.getElementsByName("studentId" + i)[0].value;
        var name = document.getElementsByName("fullName" + i)[0].value;
        var dob = document.getElementsByName("dob" + i)[0].value;
        var className = document.getElementsByName("class" + i)[0].value;
        var gpa = document.getElementsByName("gpa" + i)[0].value;

        // Create a new Student instance
        var student = new Student(id, name, dob, className, gpa);
        students.push(student);
    }

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

    // Retrieve student information
    var numStudents = document.getElementById("numStudents").value;
    var studentsInfo = "";
    for (var i = 1; i <= numStudents; i++) {
        var id = document.getElementsByName("studentId" + i)[0].value;
        var name = document.getElementsByName("fullName" + i)[0].value;
        var dob = document.getElementsByName("dob" + i)[0].value;
        var className = document.getElementsByName("class" + i)[0].value;
        var gpa = document.getElementsByName("gpa" + i)[0].value;

        // Concatenate student information
        studentsInfo += "Student " + i + ":<br>" +
            "ID: " + id + "<br>" +
            "Name: " + name + "<br>" +
            "DOB: " + dob + "<br>" +
            "Class: " + className + "<br>" +
            "GPA: " + gpa + "<br><br>";
    }

    // Display student information
    displayArea.innerHTML = studentsInfo;
}
