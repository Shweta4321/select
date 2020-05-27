function recaptcha_token () {
     let fileref1=document.createElement('script')
     console.log(fileref1, "i am here")
     fileref1.textContent = `
          grecaptcha.ready(function() {
               grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                   console.log(token,"i am in token")
                    return;
               });
          });
     `;
     document.body.appendChild(fileref1);
     console.log(fileref1,"i am in fileref1")
}
window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event,"in event");
             if (event.event_code === "custom-event" && event.data && event.data.code === "live_agent") {
                var newWindow = window.open(event.data.data);
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha") {
                 let fileref=document.createElement('script')
                    fileref.setAttribute("defer",true)
                    fileref.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU")
                    console.log(fileref,"i am in fileref")
                    document.body.appendChild(fileref);
                recaptcha_token();
                return;
            } 
            else{
                return;
            }
         }
    } catch (error) {
        console.log(error, "error")
        return;
    }
}, false);
