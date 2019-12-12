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
var pageContent = '<html><head></head><body><form id="paymentForm" action="' + "https://venus.bflaf.com:7073/bafl_preprod/chatbotpayment/confirm" + '" method="post">' + '<input type="hidden" name="lan" value="' + this.lan + '">' + '<input type="hidden" name="payment_amount" value="1234"' + this.payAmount + '">' + '<input type="hidden" name="email" value="shweta@gmail.com"' + this.emailID + '">' + '<input type="hidden" name="mobile" value="7777788888"' + this.mobileNo + '">' + '<input type="hidden" name="ptype" value="QPR"' + this.type + '">' + '<input type="hidden" name="token" value="35c7e74911b7fe8cd97b9069385ee0af7bcf14eb"' + this.token + '">' + '<input type="hidden" name="allLans" value="' + this.allLansWithCommaSeparation + '">' + '<input type="hidden" name="flag" value="' + this.flag + '">' + '</form>
    <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>'; 
      var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent); 
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
