window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "dominos_login") {
//                 var pageContent = '<html><head></head><body><form id="paymentForm" action="' + event.data.data.link + '" method="post">' + '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' + '<input type="hidden" name="amount" value="' + event.data.data.amount + '">' + '<input type="hidden" name="email" value="' + event.data.data.email + '">' + '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' + '<input type="hidden" name="wish" value="' + event.data.data.wish + '">' + '<input type="hidden" name="token" value="' + event.data.data.token + '">' + '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' + '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>';
                var newWindow = window.open(event.data.data,"_self");
//                 newWindow.document.write(pageContent);
//                 newWindow.document.close();
                return;
            } 
            else if (event.event_code === "custom-event" && event.data && event.data.code === "live_agent") {
                var newWindow = window.open(event.data.data);
                return;
            }
            else if (event.event_code === "custom-event" && event.data && event.data.code === "foreclosure-event") {
             console.log(event.data.data,"in data")
            var pageContent = '<html>' +
            '<head></head>' +
            '<body>' +
            '<form id="form1" action="' + event.data.data.link + '" method="post">' +
            '<input type="hidden" name="PolicyNo" value="' + event.data.data.PolicyNo + '">' +
            '<input type="hidden" name="ReportCode" value="' + event.data.data.ReportCode + '">' +
            '<input type="hidden" name="FinYear" value="' + event.data.data.FinYear + '">' +
            '</form> ' +
            // '<script type="text/javascript"> function redirect() {document.getElementById("paymentForm").submit();} window.onload = redirect; </script>' +
            '<script type="text/javascript">document.getElementById("form1").submit();</script></body></html>';
                console.log("here")
                var newWindow = window.open();
                newWindow.document.write(pageContent);
                newWindow.document.close();
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
