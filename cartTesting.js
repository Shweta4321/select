window.addEventListener('message', function(eventData) {
    try { 
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "cart-testing") {
                 console.log("i am in event");
                jQuery.post('/cart/add.js', {
                  items: [
                      {
                        quantity: 1,
                        id: 36551984906396,
                      }
                  ]
                });
                 console.log("i have send the event");
                return;
            }
         }
    } catch (error) {
        return;
    }
}, false);
