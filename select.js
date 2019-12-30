window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            if (event.event_code === "custom-event" && event.data && event.data.code === "payment-event") {
                var pageContent = '<html><head></head><body><form id="paymentForm" action="' + event.data.data.link + '" method="post">' + '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' + '<input type="hidden" name="amount" value="' + event.data.data.amount + '">' + '<input type="hidden" name="email" value="' + event.data.data.email + '">' + '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' + '<input type="hidden" name="wish" value="' + event.data.data.wish + '">' + '<input type="hidden" name="token" value="' + event.data.data.token + '">' + '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' + '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>';
               var pageContentURL = 'data:text/html;base64,PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5Pjxmb3JtIGlkPSJwYXltZW50Rm9ybSIgYWN0aW9uPSJodHRwczovL3ZlbnVzLmJmbGFmLmNvbTo5MDcyL01vYmlsZUFwaS9pbmRleC5waHAvQXBpZGF0YS9JbnRpYWxpemVQYXltZW50IiBtZXRob2Q9InBvc3QiPjxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImxhbiIgdmFsdWU9IkwyV0JBTjA1NzQzNDU3Ij48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJwYXltZW50X2Ftb3VudCIgdmFsdWU9IjEiPjxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImVtYWlsIiB2YWx1ZT0idW5kZWZpbmVkIj48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJtb2JpbGUiIHZhbHVlPSI3Nzc3Nzg4ODg4Ij48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJwdHlwZSIgdmFsdWU9Ik1ha2UgUGF5bWVudCI+PGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0idG9rZW4iIHZhbHVlPSI0YTJmOTA2YjNjYmVlODIxYjJkMmRjNmQ2ZWZiNDMzNDRkYWE1Y2E4Ij48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJhbGxMYW5zIiB2YWx1ZT0iIj48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJmbGFnIiB2YWx1ZT0iIj48L2Zvcm0+IDxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicGF5bWVudEZvcm0iKS5zdWJtaXQoKTs8L3NjcmlwdD48L2JvZHk+PC9odG1sPg=='
                window.open(pageContentURL, "default")
                //newWindow.document.write(pageContent);
                //newWindow.document.close();
                return;
            } 
            else if (event.event_code === "custom-event" && event.data && event.data.code === "foreclosure-event") {
            var pageContent = '<html>' +
            '<head></head>' +
            '<body>' +
            '<form id="paymentForm" action="' + event.data.data.link + '" method="post">' +
            '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' +
            '<input type="hidden" name="amount" value="' + event.data.data.amount + '">' +
            '<input type="hidden" name="email" value="' + event.data.data.email + '">' +
            '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' +
            '<input type="hidden" name="wish" value="' + event.data.data.wish + '">' +
            '<input type="hidden" name="token" value="' + event.data.data.token + '">' +
            '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' +
            '<input type="hidden" name="clubbed" value="' + event.data.data.clubbed + '">' +
            '<input type="hidden" name="reflanno" value="' + event.data.data.reflanno + '">' +
            '<input type="hidden" name="req_type" value="' + event.data.data.req_type + '">' +
            '<input type="hidden" name="case_created" value="' + event.data.data.case_created + '">' +
            '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> ' +
            // '<script type="text/javascript"> function redirect() {document.getElementById("paymentForm").submit();} window.onload = redirect; </script>' +
            '<script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>';                var newWindow = window.open();
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
