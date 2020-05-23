function recaptcha_token () {
     let fileref=document.createElement('script')
     fileref.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU")
     console.log(fileref,"i am in fileref")
     let fileref1=document.createElement('script')
      function onloadCallback() { 
        console.log("i am here")
        grecaptcha.ready(function() {
            console.log("i am here2")
            grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                console.log(token);
                return token
            });
        });
     }
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
