Table of Contents
======

  - [General](#general)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [Lighthouse](#lighthouse)
  - [GTmetrix](#gtmetrix)
  - [Color blindness](#color-blindness)
  - [Slack](#slack)
  - [Others](#others)
  - [Bugs](#bugs)


## General

The design goal is to make a clear, accessible, structured site so that visitors can easily design their own business cards. <br>
When landing on the page there is an explanation on how things work: <br>
<img src="assets/images/testing_images/explanation.png" alt="Explanation" width="25%" height="25%"> <br>
After reading it the user can either request a sample kit or start designing. When the user clicks the sample kit button they will be taken to a form, this form needs to be filled in to get the address to send the sample kit. <br>
<img src="assets/images/testing_images/sample_form1.png" alt="Sample form 1" width="25%" height="25%">
<img src="assets/images/testing_images/sample_form2.png" alt="Sample form 3" width="25%" height="25%">
<img src="assets/images/testing_images/sample_form3.png" alt="Sample form 3" width="24%" height="24%"> <br> 
After everything is filled out an email is sent to, in this case me, with the data needed to send the sample kit through mail. <br>
<img src="assets/images/testing_images/sample_form_emailjs_mail.png" alt="Form emailJS mail" width="40%" height="40%"> <br>
When the user feels ready to start designing they can click the start design button, which will take them to the creator.html page. <br>
<img src="assets/images/testing_images/creator_page.png" alt="Creator page" width="25%" height="25%"> <br>
As a visitor there were multiple steps you would like to take, in the manual tests it was checked if these were achieved.
- Choose out of three different sizes of business cards.
- Choose a background color. <br>
<img src="assets/images/testing_images/step1_2.png" alt="Step 1 & 2" width="25%" height="25%"> <br>
This can be done in step 1 and 2.
- Choose the paper type.
- Choose the quantity. <br>
<img src="assets/images/testing_images/step3_4.png" alt="Step 3 & 4" width="25%" height="25%"> <br>
This can be done in step 3 and 4.
- Upload an own photo or logo.
- Edit text content.
- Download the designed card as a low-res jpeg file. <br>
<img src="assets/images/testing_images/buttons.png" alt="Buttons" width="25%" height="25%">
<img src="assets/images/testing_images/preview.png" alt="Preview" width="25%" height="25%"> <br>
<img src="assets/images/testing_images/preview_testing.jpeg" alt="Download preview" width="18%" height="18%"> <br>
The user can click the buttons to achieve this, also the selections made with steps 1 and 2 are visible on this preview.
- Send a request for a quotation for the designed business cards.<br>
<img src="assets/images/testing_images/request_form1.png" alt="Request form 1" width="25%" height="25%">
<img src="assets/images/testing_images/request_form2.png" alt="Request form 2" width="25%" height="25%"> <br>
<img src="assets/images/testing_images/request_form3.png" alt="Request form 3" width="25%" height="25%"> <br>
<img src="assets/images/testing_images/quotation_form_emailjs_mail.png" alt="Quotation form emailJS mail" width="40%" height="40%"> <br>
As with the sample kit form after everything is filled out the request quotation button can be clicked and the user will be informed the request is send successfully  and will be redirected to the homepage and the email with the values that are needed to make a quotation is send through EmailJS, to in this case me.

It can be concluded that all goals have been achieved. <br>
The site has been tested on the available DevTools for phone and tablet sizes as well as on multiple responsive sizes and it was made sure that it looks good and works well on all. <br>
<!-- The site was also tested on multiple devices among others an OnePlus Nord, an iMac (Retina 5K, 27-inch, 2017), a MacBook-Air (Retina M1, 13.3-inch, 2020) and a Samsung Galaxy Tab4 (10.1-inch 2014), everything works as it should. -->

## HTML

HTML code was tested with a [HTML](https://validator.w3.org/#validate_by_input) validator, all the pages were checked. <br>
<img src="assets/images/testing_images/html_check.png" alt="HTML check" width="55%" height="55%"> <br>
No errors or warnings were found.

## CSS

CSS code was tested with a [CSS](https://jigsaw.w3.org/css-validator/validator.html.en#validate_by_input) validator. <br>
<img src="assets/images/testing_images/css_check.png" alt="CSS check" width="55%" height="55%"> <br>
Only warnings were found, but nothing that needs to be fixed or effects the code in a wrong way.

## JavaScript

JavaScript was tested with a [JavaScript](https://jshint.com/) validator. <br>
<img src="assets/images/testing_images/js_check1.png" alt="JS check 1" width="55%" height="55%">
<img src="assets/images/testing_images/js_check2.png" alt="JS check 2" width="55%" height="55%"><br>
Only warnings were found, but nothing that needs to be fixed or effects the code in a wrong way.

## Lighthouse

<!-- All pages have passed through Lighthouse in Chrome DevTools, the results for desktop can found here:  -->
<!-- <img src="assets/images/TESTING images/lighthouse_desktop_reports.png" alt="Lighthouse desktop reports"/>
and these are the results for the mobile versions:
<img src="assets/images/TESTING images/lighthouse_mobile_reports.png" alt="Lighthouse mobile reports"/>
The results are satisfying, so at this moment there is no need for adjustments. -->

## GTmetrix 

<!-- The site was tested with [GTmetrix](https://gtmetrix.com/) by my husband. This is the [first report](https://gtmetrix.com/reports/daph1986.github.io/CTWNdIKZ/). After that the images were compressed to reduce the page loading time. At the end a final test was done, this is the [report](https://gtmetrix.com/reports/daph1986.github.io/XUnAX0rn/) from that test. -->

## Color blindness 

<!-- Color blindness was tested on this [site](https://www.toptal.com/designers/colorfilter/) to ensure you would still be able to read the website when you have different types of color blindness. Here you will find a screenshot off the homepage test, but of course all pages were tested.
<img src="assets/images/TESTING images/protanopia.png" alt="Protanopia"/>
<img src="assets/images/TESTING images/deutanopia.png" alt="Deutanopia"/>
<img src="assets/images/TESTING images/tritanopia.png" alt="Tritanopia"/>
<img src="assets/images/TESTING images/greyscale_achromatopsia.png" alt="Greyscale / Achromatopsia"/> -->

## Slack

<!-- On the 3rd of February the project was placed on [Slack](https://slack.com/intl/en-nl/) and there a few points were brought up by Richard Lovett & Marina Pavlovic, among others the fact that the moon calendar modal could be viewed better when there is a difference in background with the base page and that the contrast for the text and background on the daily life page wasn’t enough. The decision was made to adjust this by changing the background of the modal a bit and to change the background color for the daily life page in order to get a good contrast and keep the consistency in text color. Richard also gave the advice to run the CSS code through an online Autoprefixer CSS. -->

## Others

<!-- A lot of different people were asked to check the project to ensure it works on different systems and devices. The website was tested on Samsung Galaxy TabA (10.1-inch 2019), OnePlus 5, Xiaomi Redmi Note 7, Xiaomi Redmi Note 8 Pro, Motorola G9, Motorola G5, Samsung S7, iPhone 6, iPhone 7, iPhone 12 and iPhone 12 Pro Max among others.
My colleague found a bug when you turn your iPhone in landscape mode. 
<img src="assets/images/TESTING images/ios_bug_1.jpeg" alt="iOS bug 1"/>
<img src="assets/images/TESTING images/ios_bug_2.jpeg" alt="iOS bug 2"/>
<img src="assets/images/TESTING images/ios_bug_3.jpeg" alt="iOS bug 3"/>
<img src="assets/images/TESTING images/ios_bug_4.jpeg" alt="iOS bug 4"/>
<img src="assets/images/TESTING images/ios_bug_5.jpeg" alt="iOS bug 5"/>
Research was done and it was tried to solve but didn't work out. It was really frustrating because when you turn iPhones in landscape in the DevTools online this bug doesn't get displayed.
It has to do with the "Notch" which is a safe area on iPhone as explained [here](https://css-tricks.com/the-notch-and-css/). It does this with more sites not only this website.
So, this will be something for the future to solve. <br>
#### Advices given after testing which were followed
1. The reason a preload for jQuery was added, is that a friend of mine, Benny, who works as a senior developer explained that this was a smart thing to do, so that the browser gets a hint of what is coming and can prepare for loading the content. He also suggested that it was better to give the redirect function on the homepage a more self-describing name for clarification and to make the email icon clickable and let it open in the default email.
2. It was my husband, Django, who suggested to put the JavaScript in a separate file. -->

Bugs
======

#### Preview file

The following CSS code was used to set the preview to center:
```
#center.row .col.s12 {
  float: none;
  display: block;
  margin: auto;
  float: none;
}
```
but as a result when downloading the preview file the prewiew was cut off. <br>
<img src="assets/images/testing_images/preview_bug1.jpeg" alt="Preview bug 1" width="26%" height="26%"> <br>
This was solved by changing the row into a container and giving it this CSS code:
```
#center-template {
  width: 100%;
  height: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
```
But then a strip of the background color on the bottom of preview got visible. <br>
<img src="assets/images/testing_images/preview_bug2.jpeg" alt="Preview bug 2" width="25%" height="25%">
<img src="assets/images/testing_images/preview_bug3.jpeg" alt="Preview bug 3" width="25%" height="25%"> <br>
This was first fixed by combining the existing JavaScript functions for selectSize, setDimensions and makeCanvasLarge into the selectSize function. 

```
function selectSize(element) {

  const image = document.getElementById('templates');

  if (element.id == 'single-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_one_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "495px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "220px";}

  } else if (element.id == 'single-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businescard_double_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "1220px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "535px";}

  } else if (element.id == 'double-portrait-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_one_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "556px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "250px";}

  } else if (element.id == 'double-portrait-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_portrait_double_sided.png';

    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "1305px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "580px";}
    
  } else if (element.id == 'double-landscape-one-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_one_sided.png';
   
    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "253px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "112px";}

  } else if (element.id == 'double-landscape-double-sided' && element.checked) {
    image.src = 'assets/images/businesscards_templates/businesscard_double_landscape_double_sided.png';
    
    if (l.matches) {
      canvas.setDimensions({ width: 720, height: 1300 });
      document.getElementById("center").style.height = "643px";}
    else {
      canvas.setDimensions({ width: 320, height: 200 });
      document.getElementById("center").style.height = "282px";}
  }
}
```
But my mentor advised that this code was not the best to read, so after refactoring the code looks like this:
```
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
      break;

    case 'single-double-sided':
      singleDoubleSided();
      break;

    case 'double-portrait-one-sided':
      doublePortraitOneSided();
      break;

    case 'double-portrait-double-sided':
      doublePortraitDoubleSided();
      break;

    case 'double-landscape-one-sided':
      doubleLandscapeOneSided();
      break;

    case 'double-landscape-double-sided':
      doubleLandscapeDoubleSided();
      break;
  }
}

function selectSize(element) {
  if (element.checked) {
    getCardType(element.id);
  }
  else {
    return false;
  }
}

```
This ensures that for size the user selects, on the screen size the user is on, the right div and canvas size  selected.
The preview is good now: <br>
<img src="assets/images/testing_images/preview_bug_fixed.jpeg" alt="Preview bug fixed" width="25%" height="25%"> <br>
One thing remains to be said, when a size selection is made switching from screen size does not resizes the canvas. Only when a new selection is made the proper size will be shown. Of course, this can been seen as a bug, but with normal usage this will not happen.

#### Safari button bug

The site was tested on Safari web browser among others and there appeared to be something wrong with the add text, download & reset buttons section. <br>
<img src="assets/images/testing_images/safari_button_bug1.jpeg" alt="Safari button bug 1" width="35%" height="35%"> <br>
The buttons were colorless, the following code was tried to fix it: <br>
HTML creator.html:
```
<button class="waves-effect btn-large btn-postfly button-spacing" type="button" name="action"
  onclick="addTextField()">Add text field</button>
<button class="waves-effect btn-large btn-postfly" type="button" onclick="downloadPreview()">Download your preview</button>
<button><a class="waves-effect btn-large btn-postfly button-spacing" type="reset" value="Reset"
href="creator.html">Reset</a></button>
```
CSS:
```
button {
  border: none;
}
```
This resulted in the following: <br>
<img src="assets/images/testing_images/safari_button_bug2.jpeg" alt="Safari button bug 2" width="35%" height="35%"> <br>
After inspecting the type and value seemed to be the problem, so the CSS styling was removed again and the code for the reset button in creator.html was changed to:
```
<a class="waves-effect btn-large btn-postfly button-spacing" href="creator.html">Reset</a>
```
That fixed the problem.<br>
<img src="assets/images/testing_images/safari_button_bug_fixed.jpeg" alt="Safari button bug fixed" width="35%" height="35%">