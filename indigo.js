window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha") {
                console.log("I ma in event");
                <script src="https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU"></script>
                <script>
                    grecaptcha.ready(function() {
                        grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                            console.log(token);
                            window.parent.postMessage(JSON.stringify({
                                event_code: 'ym-client-event', data: JSON.stringify({
                                    event: {
                                        code: "rating",
                                        data: {
                                            recaptcha: token
                                        }
                                    }
                                })
                            }), '*');
                            return;
                        });
                    });
                </script>
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
