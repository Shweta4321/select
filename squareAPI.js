window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "window_cloesd") {
                window.close();
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha"){
                run_recaptcha();
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
