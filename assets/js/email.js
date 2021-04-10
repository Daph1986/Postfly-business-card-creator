
// Validation for EmailJS
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

// ------------- Sample kit request form ------------- 
function sendRequestMail(requestForm) {
  // This ensures that all listed details are send through emailjs
  emailjs.send("service_gcpzmbl", "sample kit request", {
    "from_fname": requestForm.fname.value,
    "from_lname": requestForm.lname.value,
    "from_address01": requestForm.address01.value,
    "from_address02": requestForm.address02.value,
    "from_address03": requestForm.address03.value,
    "from_address04": requestForm.address04.value,
    "from_email": requestForm.email.value,
  })
    .then(
      function (response) {
        M.toast({ html: 'Thank you, your request has been sent successfully, you will return to the homepage!!', displayLength: '4000', response });
        window.setTimeout(function () {
          location.replace("index.html");
        }, 5000);
      },
      function (error) {
        M.toast({ html: 'Sorry, something went wrong :-(', displayLength: '4000', error});
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}

// ------------- Request quotation form ------------- 
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
        M.toast({ html: 'Thank you, your qoutation request has been sent successfully, you will return to the homepage!!', displayLength: '4000', response });
        window.setTimeout(function () {
          location.replace("index.html");
        }, 5000);
      },
      function (error) {
        M.toast({ html: 'Sorry, something went wrong :-(', displayLength: '4000', error});
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}
