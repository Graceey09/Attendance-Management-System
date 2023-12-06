function recordAttendance() {
    var email = document.getElementById("my-email").value;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var month = document.getElementById("months").value;
    var date = document.getElementById("dates").value;
    var attended = document.getElementById("checkbox-attended").checked;
    var skipped = document.getElementById("checkbox-skipped").checked;

    if (!email || !firstName || !lastName || !month || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    if (attended && skipped) {
        alert("Please select either 'Attended' or 'Skipped,' not both.");
        return;
    }

    alert("Attendance recorded successfully!");
}

function clearForm() {
    document.getElementById("my-email").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("months").selectedIndex = 0;
    document.getElementById("dates").value = "";
    document.getElementById("checkbox-attended").checked = true;
    document.getElementById("checkbox-skipped").checked = true;
}


document.getElementById("record-button").addEventListener("click", recordAttendance);
document.getElementById("clear-button").addEventListener("click", clearForm);


