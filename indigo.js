function recaptcha_token () {
     let fileref=document.createElement('script')
     fileref.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU")
     console.log(fileref,"i am in fileref")
     document.body.appendChild(fileref);
     let fileref1=document.createElement('script')
     console.log(fileref1, "i am here")
     fileref1.textContent = `
          grecaptcha.ready(function() {
               grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                    return token
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
             if (event.event_code === "custom-event" && event.data && event.data.code === "live_agent") {
                var newWindow = window.open(event.data.data);
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "recaptcha") {
                 let token = ""
                 let recaptcha_file=document.createElement('script')
                 recaptcha_file.setAttribute("type","text/javascript")
                 console.log(recaptcha_file,"i am in recaptcha_filedfghjk")
                 recaptcha_file.innerHTML = recaptcha_token();
                 document.body.appendChild(recaptcha_file);
                 console.log(recaptcha_file,"i am in recaptcha_filedfghjk")
                 console.log(token,"i am in token")
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
