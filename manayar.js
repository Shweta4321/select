window.addEventListener('message', function(eventData) {
    try { 
         if(!window.grecaptcha){
            recaptcha_token ();
         }
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "manyavar-customerLogin") {
                window.postMessage(JSON.stringify({
                         event_code: 'manyavar-customerLogin'
                    }), '*');
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);
