const canvas = new fabric.Canvas('canvas');

// ------------- Select size ------------- 
function selectSize(element) {
  let div = document.getElementById('card-div');
  if (element.id == 'size-single' && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businescard_one_sided.png'>";
  } else if (element.id == 'size-double-portrait' && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png'>";
  } else if (element.id == 'size-double-landscape' && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png'>";
  }
}

// ------------- Select printing method ------------- 
function selectPrintingMethod(element) {
  let div = document.getElementById('card-div');
  if (element.id == ('size-single' && 'one-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businescard_one_sided.png'>";
  } else if (element.id == ('size-single' && 'double-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businescard_double_sided.png'>";
  } else if (element.id == ('size-double-portrait' && 'one-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png'>";
  } else if (element.id == ('size-double-portrait' && 'double-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_portrait_double_sided.png'>";
  } else if (element.id == ('size-double-landscape' && 'one-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png'>";
  } else if (element.id == ('size-double-landscape' && 'double-sided') && element.checked) {
    div.innerHTML = "<img src='assets/images/businesscards_templates/businesscard_double_landscape_double_sided.png'>";
  }
}

// ------------- Select background color ------------- 
function selectBackgroundColor(element) {
  let div = document.getElementById('card-div');
  if (element.id == 'bg-blue' && element.checked) {
    div.style.backgroundColor = '#007bff';
  } else if (element.id == 'bg-green' && element.checked) {
    div.style.backgroundColor = '#28a745';
  } else if (element.id == 'bg-red' && element.checked) {
    div.style.backgroundColor = '#dc3545';
  } else if (element.id == 'bg-yellow' && element.checked) {
    div.style.backgroundColor = '#ffc107';
  } else if (element.id == 'bg-orange' && element.checked) {
    div.style.backgroundColor = '#fd7e14';
  } else if (element.id == 'bg-black' && element.checked) {
    div.style.backgroundColor = '#000';
  } else if (element.id == 'bg-grey' && element.checked) {
    div.style.backgroundColor = '#6c757d';
  } else if (element.id == 'bg-white' && element.checked) {
    div.style.backgroundColor = '#fff';
  }
}
