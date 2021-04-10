const canvas = new fabric.Canvas('canvas');

// ------------- Select background color ------------- 
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