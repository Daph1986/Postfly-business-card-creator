// -------------  Collapsibles ------------- 

// From materialize documentation to initialise the collapsible with jQuery
$(document).ready(function(){
  $('.collapsible').collapsible();
});

// -------------  Creator form ------------- 

// Validation for EmailJS
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

// Need to sort this function out so that all the items are send in EmailJS as well as the preview of the card
function sendQuotationMail(quotationForm) {
  // This ensures that all listed details are send through emailjs
  emailjs.send("service_gcpzmbl", "quotation request", {
    "from_fname": quotationForm.fname.value,
    "from_lname": quotationForm.lname.value,
    "from_email": quotationForm.email.value,
    "from_size": quotationForm.size.value,
    "from_method": quotationForm.method.value,
    "from_paper": quotationForm.paper.value,
    "from_quantity": quotationForm.quanity.value,
  })
    .then(
      function (response) {
        alert("Thank you, your qoutation request has been sent successfully, you will return to the homepage!!", response);
        location.replace("index.html");
      },
      function (error) {
        alert("FAILED", error);
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}
