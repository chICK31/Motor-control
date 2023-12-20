function sendCommand(command) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', command, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            // Update the status after fetching the data
            updateStatus(data.servoStatus);
        }
    };
    xhr.send();
}

function updateStatus(status) {
    var statusElem = document.getElementById('status');
    statusElem.textContent = 'Servo Status: ' + status;
}
