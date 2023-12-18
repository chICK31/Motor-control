<script>
    function sendCommand(command) {
        var xhr = new XMLHttpRequest();
        // Replace with your ESP32/ESP8266's external IP address and port
        xhr.open('GET', 'http://24.170.53.83:9000/' + command, true);
        xhr.send();
    }
</script>
