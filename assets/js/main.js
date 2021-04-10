// -------------  Modals ------------- 

// From materialize documentation to initialise the modal with jQuery
$(document).ready(function () {
  $('.modal').modal();
});

// ------------- Sample kit request form ------------- 

// Validation for EmailJS
document.onload = function () {
  emailjs.init("user_2XFUnsxHC1xsdX5DI6gOQ");
}();

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
        alert("FAILED", error);
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}
