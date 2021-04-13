const canvas = new fabric.Canvas('canvas');


// ------------- Select size & printing method ------------- 
function selectSize(element) {

  const image = document.getElementById('templates');

  if (element.id == 'single-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_one_sided.png';
  } else if (element.id == 'single-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_double_sided.png';
  } else if (element.id == 'double-portrait-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png';
  } else if (element.id == 'double-portrait-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_double_sided.png';
  } else if (element.id == 'double-landscape-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png';
  } else if (element.id == 'double-landscape-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_double_sided.png';
  }
}


// ------------- Select background color ------------- 
function selectBackgroundColor(element) {

  const div = document.getElementById('template-div');

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


// ------------- Responsive canvas code part from https://jsfiddle.net/fvzj7z1d/7/ ------------- 

widthscrencan = (window.innerWidth > 0) ? window.innerWidth : screen.width; // capture width screen onload
canvasScale = 1; //global  

let ocw = canvas.width;
let och = canvas.height;
let box = document.getElementById('box');
box.width = ocw;

// console.log('ocw: ', ocw);
// console.log('och: ', och);

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  box.width = window.innerWidth * 0.90;
  // console.log('box w: ', box.width);

  let sf = box.width / ocw;

  // console.log('sf: ', sf);

  setCanvasZoom(sf);
  canvas.requestRenderAll();
}

// resize on init
resizeCanvas();


function setCanvasZoom(zoom) {
  let objects = canvas.getObjects();
  for (i in objects) {
    let object = objects[i];
    let scaleX = object.scaleX,
      scaleY = object.scaleY,
      left = object.left,
      top = object.top;

    // preserve the original dimensions.
    object.original_scaleX = !object.original_scaleX ? scaleX : object.original_scaleX;
    object.original_scaleY = !object.original_scaleY ? scaleY : object.original_scaleY;
    object.original_left = !object.original_left ? left : object.original_left;
    object.original_top = !object.original_top ? top : object.original_top;

    object.scaleX = object.original_scaleX * zoom;
    object.scaleY = object.original_scaleY * zoom;
    object.left = object.original_left * zoom;
    object.top = object.original_top * zoom;

    object.setCoords();
  }

  canvas
    .setWidth(ocw * zoom)
    .setHeight(och * zoom);
};

// ------------- Responsive canvas code part from https://jsfiddle.net/fvzj7z1d/7/ end ------------- 


// ------------- Upload own image ------------- 
// This code makes sure that the image(s) which are selected with the upload file button appear on the canvas

let uploadedImg = (uploadFile) => {
  let fileUpload = document.getElementById('file-upload')
  let file = fileUpload.files[0];
  reader.readAsDataURL(file)
}

let inputFile = document.getElementById('file-upload');
inputFile.addEventListener('change', uploadedImg)

let reader = new FileReader();

reader.addEventListener("load", () => {
  fabric.Image.fromURL(reader.result, img => {
    canvas.add(img)
    canvas.requestRenderAll()
  })
})

// ------------- Add text to canvas ------------- 

function addTextField () {
  let text = new fabric.Textbox('Change your text by clicking here', { fontFamily: 'Roboto', fontSize:16, left: 100, top: 100, selectable:true, });
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