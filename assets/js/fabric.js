// ------------- Collapsibles ------------- 

// From materialize documentation to initialise the collapsible with jQuery
$(document).ready(function(){
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

// ------------- Fabric ------------- 
const canvas = new fabric.Canvas('canvas');


function selectBackgroundColor(element) {
  let div = document.getElementById('card-div');
  if (element.id == 'a' && element.checked) {
    div.style.backgroundColor = 'blue';
  } else if (element.id == 'b' && element.checked) {
    div.style.backgroundColor = 'green';
  }
  else if (element.id == 'c' && element.checked) {
    div.style.backgroundColor = 'red';
  }
  else if (element.id == 'd' && element.checked) {
    div.style.backgroundColor = 'yellow';
  }
  else if (element.id == 'e' && element.checked) {
    div.style.backgroundColor = 'orange';
  }
  else if (element.id == 'f' && element.checked) {
    div.style.backgroundColor = 'black';
  }
  else if (element.id == 'g' && element.checked) {
    div.style.backgroundColor = 'grey';
  }
  else if (element.id == 'h' && element.checked) {
    div.style.backgroundColor = 'white';
  }
}