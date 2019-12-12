window.addEventListener('message', function(eventData) {
 try {
  if (JSON.parse(eventData.data)) {
  let event = JSON.parse(eventData.data);
  console.log(event, "eventData1");
  console.log(event.event_code === "custom-event" && event.data && event.data.code === "payment-event", "condition");
  if (event.event_code === "custom-event" && event.data && event.data.code === "payment-event") {
var pageContent = '<html><head></head><body><form id="<html><head></head><body><form id="paymentForm" action="https://venus.bflaf.com:7073/bafl_preprod/chatbotpayment/confirm" method="post"><input type="hidden" name="lan" value="L2WHOW03209659"><input type="hidden" name="amount" value="1234"><input type="hidden" name="email" value="shweta@gmail.com"><input type="hidden" name="mobile" value="7777788888"><input type="hidden" name="wish" value="QPR"><input type="hidden" name="token" value="f97613abf751bece2bda13af7ed9d445057252d0"><input type="hidden" name="allLans" value="L2WHOW03209659"><input type="hidden" name="flag" value="true"></form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>Form" action="' + event.data.data.link + '" method="post">' + '<input type="hidden" name="lan" value="' + event.data.data.lan + '">' + '<input type="hidden" name="payment_amount" value="' + event.data.data.amount + '">' + '<input type="hidden" name="email" value="' + event.data.data.email + '">' + '<input type="hidden" name="mobile" value="' + event.data.data.mobile + '">' + '<input type="hidden" name="ptype" value="' + event.data.data.wish + '">' + '<input type="hidden" name="token" value="' + event.data.data.token + '">' + '<input type="hidden" name="allLans" value="' + event.data.data.lan + '">' + '<input type="hidden" name="flag" value="' + event.data.data.flag + '">' + '</form> <script type="text/javascript">document.getElementById("paymentForm").submit();</script></body></html>'; 
 console.log(pageContent,"pageContent")
    var newWindow = window.open();
      newWindow.document.write(pageContent);
      newWindow.document.close();
//    var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent); 
//     console.log(pageContentUrl,"pageContentUrl")
//      var win = window.open();
//      win.document.write('<iframe src="' + pageContentUrl  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');


//     window.open(pageContentUrl, "default")
    return;
  }
}
  return;
 } catch (error) {
  console.log(error, "error")
  return;
 }
}, false);
