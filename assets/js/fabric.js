// ------------- Collapsibles ------------- 

// From materialize documentation to initialise the collapsible with jQuery
$(document).ready(function () {
  $('.collapsible').collapsible();
});

// ------------- EmailJS ------------- 

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
        M.toast({ html: 'Thank you, your qoutation request has been sent successfully, you will return to the homepage!!', displayLength: '4000', response });
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

// ------------- Fabric ------------- 
const canvas = new fabric.Canvas('canvas');


function selectBackgroundColor(element) {
  let div = document.getElementById('card-div');
  if (element.id == 'bg-blue' && element.checked) {
    div.style.backgroundColor = '#007bff';
  } else if (element.id == 'bg-green' && element.checked) {
    div.style.backgroundColor = '#28a745';
  }
  else if (element.id == 'bg-red' && element.checked) {
    div.style.backgroundColor = '#dc3545';
  }
  else if (element.id == 'bg-yellow' && element.checked) {
    div.style.backgroundColor = '#ffc107';
  }
  else if (element.id == 'bg-orange' && element.checked) {
    div.style.backgroundColor = '#fd7e14';
  }
  else if (element.id == 'bg-black' && element.checked) {
    div.style.backgroundColor = '#000';
  }
  else if (element.id == 'bg-grey' && element.checked) {
    div.style.backgroundColor = '#6c757d';
  }
  else if (element.id == 'bg-white' && element.checked) {
    div.style.backgroundColor = '#fff';
  }
}