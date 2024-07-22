function logMessage(message) {

    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}`;
    console.log(logEntry);
    
    const logContainer = document.getElementById('log');
    const logItem = document.createElement('div');
    logItem.textContent = logEntry;
    logContainer.appendChild(logItem);
}

document.addEventListener('DOMContentLoaded', () => {
    logMessage('Page loaded');
});
