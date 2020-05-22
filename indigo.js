function recaptcha_token () {
     <script src="https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU"></script>
     <script>
     document.onreadystatechange = function () { 
        grecaptcha.ready(function() {
            grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                console.log(token);
                return token
            })
        })
    })
</script>
}
window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha") {
                let token = recaptcha_token()
                window.parent.postMessage(JSON.stringify({
                    event_code: 'ym-client-event', data: JSON.stringify({
                        event: {
                        code: "recaptcha_token",
                            data: {
                                recaptcha: token
                                }
                            }
                        })
                }), '*');
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
