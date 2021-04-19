// Validation for EmailJS
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

// ------------- Request quotation form ------------- 

function sendQuotationMail(quotationForm) {

  // First the checked value from the radio buttons for size / paper and quantity are needed
  let sizeResult;

  for (let i = 0; i < document.form.size.length; i++) {
    if (document.form.size[i].checked) {

      sizeResult = document.form.size[i].value;
    }
  }

  let paperResult;

  for (let i = 0; i < document.form.paper.length; i++) {
    if (document.form.paper[i].checked) {

      paperResult = document.form.paper[i].value;
    }
  }

  let quantityResult;

  for (let i = 0; i < document.form.quantity.length; i++) {
    if (document.form.quantity[i].checked) {

      quantityResult = document.form.quantity[i].value;
    }
  }

  // This ensures that all listed details are send through emailjs
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
        M.toast({ html: 'Thank you, your qoutation request has been sent successfully, you will return to the homepage!!', displayLength: '3000', response });
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