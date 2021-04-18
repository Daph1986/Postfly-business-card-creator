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
        M.toast({ html: 'Thank you, your request has been sent successfully, you will return to the homepage!!', displayLength: '3000', response });
        window.setTimeout(function () {
          location.replace("index.html");
        }, 4000);
      },
      function (error) {
        M.toast({ html: 'Sorry, something went wrong :-(', displayLength: '3000', error});
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}

// ------------- Request quotation form ------------- 

// First the checked value from the radio buttons for size / paper and quantity are needed

let sizeResult 

for (let i = 0; i<document.form.size.length; i++) {
  if (document.form.size[i].checked) {

    sizeResult = document.form.size[i].value
  }
}

let paperResult 

for (let i = 0; i<document.form.paper.length; i++) {
  if (document.form.paper[i].checked) {

    paperResult = document.form.paper[i].value
  }
}

let quantityResult 

for (let i = 0; i<document.form.quantity.length; i++) {
  if (document.form.quantity[i].checked) {

    quantityResult = document.form.quantity[i].value
  }
}

function sendQuotationMail(quotationForm) {
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
        M.toast({ html: 'Sorry, something went wrong :-(', displayLength: '3000', error});
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}