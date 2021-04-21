// ------------- Init canvas ------------- 

const canvas = new fabric.Canvas('canvas');

canvas.setDimensions({
  width: 320,
  height: 220
});

// ------------- Larger canvas on bigger screen ------------- 

// This piece of code is based on the How TO - Media Queries with JavaScript change color function of W3schools.com 

let screenResolution = window.matchMedia("(min-width: 1440px)");

function makeCanvasLarge(screenResolution) {
  if (screenResolution.matches) {
    canvas.setDimensions({
      width: 720,
      height: 480
    });
  }
}
makeCanvasLarge(screenResolution);
screenResolution.addListener(makeCanvasLarge);

// ------------- Select size & printing method ------------- 

const image = document.getElementById('templates');

function singleOneSided() {
  image.src = 'assets/images/businesscards_templates/businescard_one_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 480 });
    document.getElementById("center-template").style.height = "495px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 205 });
    document.getElementById("center-template").style.height = "220px";
  }
}

function singleDoubleSided() {
  image.src = 'assets/images/businesscards_templates/businescard_double_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 1205 });
    document.getElementById("center-template").style.height = "1220px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 520 });
    document.getElementById("center-template").style.height = "535px";
  }
}

function doublePortraitOneSided() {
  image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 540 });
    document.getElementById("center-template").style.height = "556px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 235 });
    document.getElementById("center-template").style.height = "250px";
  }
}

function doublePortraitDoubleSided() {
  image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_double_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 1290 });
    document.getElementById("center-template").style.height = "1305px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 565 });
    document.getElementById("center-template").style.height = "580px";
  }
}

function doubleLandscapeOneSided() {
  image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 240 });
    document.getElementById("center-template").style.height = "253px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 100 });
    document.getElementById("center-template").style.height = "112px";
  }
}

function doubleLandscapeDoubleSided() {
  image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_double_sided.png';
  if (screenResolution.matches) {
    canvas.setDimensions({ width: 720, height: 625 });
    document.getElementById("center-template").style.height = "640px";
  }
  else {
    canvas.setDimensions({ width: 320, height: 270 });
    document.getElementById("center-template").style.height = "282px";
  }
}

function getCardType(id) {
  switch (id) {
    case 'single-one-sided':
      singleOneSided();
      break

    case 'single-double-sided':
      singleDoubleSided();
      break

    case 'double-portrait-one-sided':
      doublePortraitOneSided();
      break

    case 'double-portrait-double-sided':
      doublePortraitDoubleSided();
      break

    case 'double-landscape-one-sided':
      doubleLandscapeOneSided();
      break

    case 'double-landscape-double-sided':
      doubleLandscapeDoubleSided();
      break
  }
}

function selectSize(element) {
  if (element.checked) {
    getCardType(element.id)
  }
  else {
    return false;
  }
}

// ------------- Select background color ------------- 

const div = document.getElementById('template-div');

function colorBlue() {
    document.getElementById('template-div').style.backgroundColor = '#007bff';
  }


function colorGreen() {
    div.style.backgroundColor = '#28a745';
}


function colorRed() {
    div.style.backgroundColor = '#dc3545';
}

function colorYellow() {
    div.style.backgroundColor = '#ffc107';
}

function colorOrange() {
    div.style.backgroundColor = '#fd7e14';
  
}

function colorDarkGrey() {
    div.style.backgroundColor = '#343a40';
}

function colorGrey() {
    div.style.backgroundColor = '#6c757d';
}
function colorWhite() {
    div.style.backgroundColor = '#fff';
}


function getColor(id) {

  switch (id) {
    case 'bg-blue':
      colorBlue();
      break

    case 'bg-green':
      colorGreen();
      break

    case 'bg-red':
      colorRed();
      break

    case 'bg-yellow':
      colorYellow();
      break

    case 'bg-orange':
      colorOrange();
      break

    case 'bg-dark-grey':
      colorDarkGrey();
      break

    case 'bg-grey':
      colorGrey();
      break

    case 'bg-white':
      colorWhite();
      break
  }
}

function selectBackgroundColor(element) {
  if (element.checked) {
    getColor(element.id)
  }
  else {
    return false;
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
  domtoimage.toJpeg(document.getElementById('template-div'), { quality: 0.90 }).then(function (dataUrl) {
    let link = document.createElement('a');
    link.download = 'preview.jpeg';
    link.href = dataUrl;
    link.click();
  });
}