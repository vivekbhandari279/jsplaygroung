const clock = document.getElementById('clock');

setInterval(() => {
    const date = new Date();
    // date = date.toTimeString();
    clock.innerHTML = date.toLocaleTimeString([], { 
        hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true 
    });
}, 1000);