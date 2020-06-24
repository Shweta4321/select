window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event,"in event")
             if (event.event_code === "custom-event" && event.data && event.data.code === "window_cloesd") {
                 console.log("i am here")
                 window.close();
                return;
            }
            else{
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);
