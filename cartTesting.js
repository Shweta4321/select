window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "add-cart") {
                 console.log("i am in add cartevent");
                jQuery.post('/cart/add.js', {
                  items: [
                      {
                        quantity: 1,
                        id: 31755734614083,
                      }
                  ]
                });
                 console.log("i have send the event");
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "get-cart") {
                console.log("i am in get cartevent");
               jQuery.getJSON('/cart.js', function(cart) {
                   // now have access to Shopify cart object
                   alert('There are now ' + cart.item_count + ' items in the cart.');
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
