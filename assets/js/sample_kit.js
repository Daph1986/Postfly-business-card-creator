// -------------- Validation for EmailJS -------------- 
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

// ------------- Sample kit request form ------------- 
function sendRequestMail(requestForm) {
  emailjs.send("service_gcpzmbl", "sample kit request", {
    "from_cname": requestForm.cname.value,
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
        M.toast({ html: 'Thank you, your request has been sent successfully, you will return to the homepage!', displayLength: '3000', response });
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