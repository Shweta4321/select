window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "add-cart") {
                 console.log(event.data.data,"i am in add cartevent");
                jQuery.post('/cart/add.js', {
                    items: event.data.data
                });
                 console.log("i have send the event");
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "get-cart") {
                console.log("i am in get cartevent");
               jQuery.getJSON('/cart.js', function(cart) {
                   console.log(cart,"in cart")
                });
                console.log("i have send the event");
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "page_open") {
                var newWindow = window.open(event.data.data,"_self");
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
