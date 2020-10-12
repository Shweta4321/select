window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "manyavar-customerLogin") {
                 console.log("i am in event");
                 document.getElementById('manyavarbotlogin').contentWindow.postMessage(JSON.stringify({
                         event_code: 'manyavar-customerLogin'
                    }), '*');
                 console.log("i have send the event");
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);
