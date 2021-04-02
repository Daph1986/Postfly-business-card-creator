// -------------  Modals ------------- 

/* 
Documentation from materialize was not sufficiant to
let model work, with explanation of my husband(Django Heimgartner)
I was able to produce this code 
*/

// Initialise Modal
(function ($) {
  $.fn.leanModal = function (options) {
    if ($('.modal').length > 0) {
      $('.modal').modal(options);
    }
  };

  $.fn.openModal = function (options) {
    $(this).modal(options);
    $(this).modal('open');
  };

  $.fn.closeModal = function () {
    $(this).modal('close');
  };
})(jQuery);

$(document).ready(function () {
  // The "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
})

// ------------- Sample kit request form ------------- 

function sendRequestMail(requestForm) {
  // This ensures that all listed details are send through emailjs
  emailjs.send("service_re41zx8", "sample kit request", {
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
        alert("Thank you, your request has been sent successfully, you will return to the homepage!!", response);
        location.replace("index.html");
      },
      function (error) {
        alert("FAILED", error);
      }
    );
  // Ensures that the location.replace is done instead of a reload of the page
  return false;
}
