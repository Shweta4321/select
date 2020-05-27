function loop(){
     if(window.grecaptcha){
          console.log("i am here grecaptcha loop")
          recaptcha_token () 
     }
     else{
          console.log("i am here else loop")
          loop();
     }
}
function recaptcha_token () {
     console.log(window.grecaptcha,"i am in grecaptcha")
     let fileref1=document.createElement('script')
     fileref1.textContent = `
          grecaptcha.ready(function() {
               grecaptcha.execute('6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU', {action:'submit'}).then(function(token) {
                   console.log(token, "i am in token")
                   document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                         event_code: 'ym-client-event',
                         data: JSON.stringify({
                         event: {
                              code: "recaptcha_token",
                              data: token
                             }
                         })
                    }), '*');
                    return;
               });
          });
     `;
     document.body.appendChild(fileref1);
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
                 let fileref=document.createElement('script')
                 fileref.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6LfsIrQUAAAAADX6a1sWsNVLQFKFdoA4_7N4YvdU")
                 document.body.appendChild(fileref);
                 recaptcha_token () 
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
