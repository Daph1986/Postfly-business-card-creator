// ------------- Init canvas ------------- 

const canvas = new fabric.Canvas('canvas');

canvas.setDimensions({
  width: 320,
  height: 220
});

// ------------- Larger canvas on bigger screen ------------- 

// This piece of code is based on the How TO - Media Queries with JavaScript change color function of W3schools.com 

let l = window.matchMedia("(min-width: 1440px)");

function makeCanvasLarge(l) {
  if (l.matches) {
    canvas.setDimensions({
      width: 720,
      height: 1300
    });
  }
}
makeCanvasLarge(l);
l.addListener(makeCanvasLarge);

// ------------- Select size & printing method ------------- 

function selectSize(element) {

  const image = document.getElementById('cards');

  if (element.id == 'single-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_one_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "495px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "220px";}

  } else if (element.id == 'single-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_double_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "1220px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "535px";}

  } else if (element.id == 'double-portrait-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "556px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "250px";}

  } else if (element.id == 'double-portrait-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_double_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "1305px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "580px";}
    
  } else if (element.id == 'double-landscape-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png';
   
    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "253px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "112px";}

  } else if (element.id == 'double-landscape-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_double_sided.png';
    
    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center-canvas").style.height = "643px";}
    else {
      canvas.setDimensions({ width: 320, height: 600 });
      document.getElementById("center-canvas").style.height = "282px";}
  }
}

// ------------- Select background color ------------- 

function selectBackgroundColor(element) {

  const div = document.getElementById('card-div');

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
  } else if (element.id == 'bg-dark-grey' && element.checked) {
    div.style.backgroundColor = '#343a40';
  } else if (element.id == 'bg-grey' && element.checked) {
    div.style.backgroundColor = '#6c757d';
  } else if (element.id == 'bg-white' && element.checked) {
    div.style.backgroundColor = '#fff';
  }
}

// ------------- Upload own image ------------- 

// This code makes sure that the image(s) which are selected with the upload file button appear on the canvas

let uploadedImg = (uploadFile) => {
  let fileUpload = document.getElementById('file-upload');
  let file = fileUpload.files[0];
  reader.readAsDataURL(file);
};

let inputFile = document.getElementById('file-upload');
inputFile.addEventListener('change', uploadedImg);

let reader = new FileReader();

reader.addEventListener("load", () => {
  fabric.Image.fromURL(reader.result, img => {
    img.scaleToHeight(100);
    img.scaleToWidth(100);
    canvas.add(img);
    canvas.requestRenderAll();
  });
});

// ------------- Add text to canvas ------------- 

function addTextField() {
  let text = new fabric.Textbox('Change your text by clicking here', { fontFamily: 'Roboto', fontSize: 16, left: 100, top: 100, selectable: true, });
  canvas.add(text);
}

// ------------- Download preview ------------- 

function downloadPreview() {
  domtoimage.toJpeg(document.getElementById('card-div'), { quality: 0.90 }).then(function (dataUrl) {
    let link = document.createElement('a');
    link.download = 'preview.jpeg';
    link.href = dataUrl;
    link.click();
  });
}
