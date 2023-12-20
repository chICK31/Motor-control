function sendCommand(command) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', command, true);
    xhr.send();
}
