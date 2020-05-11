window.addEventListener('message', function(eventData) {
    try {
        console.log(eventData,'start event')
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event,'logging event')
            if (event.event_code === "custom-event" && event.data && event.data.code === "error_message") {
                console.log('before open')
                var newWindow = window.open("https://meet.google.com/skx-bydt-adi", "_self");
                return;
            }
            else{
                return;
            }
        }
        return;
    } catch (error) {
        console.log(error, "error")
        return;
    }
}, false);
