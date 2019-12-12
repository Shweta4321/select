window.addEventListener('message', function(eventData) {
 try {
  if (JSON.parse(eventData.data)) {
  let event = JSON.parse(eventData.data);
  console.log(event, "eventData1");
  console.log(event.event_code === "custom-event" && event.data && event.data.code === "payment-event", "condition");
  if (event.event_code === "custom-event" && event.data && event.data.code === "payment-event") {
<!--     // let win = window.open("", "Payment", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
    // win.document.body.innerHTML = event.data.data; -->
<!--       var newWindow = window.open();
      newWindow.document.write(event.data.data);
      newWindow.document.close(); -->
var pageContent = '<html><head></head><body><form id="paymentForm" action="' + "https://venus.bflaf.com:7073/bafl_preprod/chatbotpayment/confirm" + '" method="post">' + '<input type="hidden" name="lan" value="' + "L2WHOW03209659" + '">' + '<input type="hidden" name="payment_amount" value="' + "1234" + '">' + '<input type="hidden" name="email" value="' + "shweta@gmail.com" + '">' + '<input type="hidden" name="mobile" value="' + "7777788888" + '">' + '<input type="hidden" name="ptype" value="' + "QPR" + '">' + '<input type="hidden" name="token" value="' + "284a8f7382c8b41b5ce7d8bb2263f4a408915b34" + '">' + '<input type="hidden" name="allLans" value="' + "L2WHOW03209659" + '">' + '<input type="hidden" name="flag" value="' + true + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>'; 
 console.log(pageContent,"pageContent")
   var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent); 
    console.log(pageContentUrl,"pageContentUrl")

    window.open(pageContentUrl, "default")
    return;
  }
}
  return;
 } catch (error) {
  console.log(error, "error")
  return;
 }
}, false);
