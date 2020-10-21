window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "add-cart") {
                jQuery.post('/cart/add.js', {
                    items: event.data.data
                });
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "get-cart") {
               jQuery.getJSON('/cart.js', function(cart) {
                  window.parent.postMessage(JSON.stringify({
                         event_code: 'get-cart-data',
                         event_data: cart
                    }), '*');
                });
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
