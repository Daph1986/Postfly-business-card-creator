// ------------- Validation for EmailJS ------------- 
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

// ------------- Request quotation form ------------- 

function sendQuotationMail(quotationForm) {
  /* 
  First the checked value from the radio buttons for size / paper and quantity are needed
  This code is based on a code that was found codegrepper.com for getting radio button values with javascript
  */
  let sizeResult = document.querySelector('input[name="size"]:checked').value;
  let paperResult = document.querySelector('input[name="paper"]:checked').value;
  let quantityResult = document.querySelector('input[name="quantity"]:checked').value;

  emailjs.send("service_gcpzmbl", "quotation request", {
    "from_fname": quotationForm.fname.value,
    "from_lname": quotationForm.lname.value,
    "from_email": quotationForm.email.value,
    "from_size": sizeResult,
    "from_paper": paperResult,
    "from_quantity": quantityResult,
  })
    .then(
      function (response) {
        M.toast({ html: 'Thank you, your quotation request has been sent successfully, you will return to the homepage!', displayLength: '3000', response });
        window.setTimeout(function () {
          location.replace("index.html");
        }, 4000);
      },
      function (error) {
        M.toast({ html: 'Sorry, something went wrong :-(', displayLength: '3000', error });
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}