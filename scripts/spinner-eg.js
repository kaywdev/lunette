// Code modified from Michael Whyte's 
// Shopping Cart - v1.0

// HTML Elements
// Slide Elements
const $slide = $('#slide');

// Product Form Elements
const $checkboxLense = $('.form-group-lense input');
const $checkboxFrame = $('.form-group-frame input');
// Form Submit Button Element
const $btnAddToCart = $('#btn-add-to-cart');
// Selected Product Information Output Elements
const $selectedLenseOut = $('#selected-lense-out');
const $selectedFrameOut = $('#selected-frame-out');
// Range slider  
const $rangeSlider = $("#myRange");


let lense = document.querySelector('input[name="lense-type"]:checked').value;
let frame = document.querySelector('input[name="frame-color"]:checked').value;
let fileNum = document.getElementById('myRange').value;

$checkboxLense.on('change', function () {
    lense = $(this).val();

    // Update the color output
    $selectedLenseOut.text(capitalizeFirstLetter(lense));
});


$checkboxFrame.on('change', function () {
    frame = $(this).val();
    // console.log(lense, frame)
    $slide.attr('href', `images/product-item/eg/eg_${frame}_regular_${fileNum}.png`);
    $slide.attr({
        src: `images/product-item/eg/eg_${frame}_regular_${fileNum}.png`,
        alt: `${frame} ${lense} eyeglasses`
    });

    // Update the color output
    $selectedFrameOut.text(capitalizeFirstLetter(frame));
});



// Range slider function
// Update the current slider value (each time you drag the slider handle)
$rangeSlider.on('input', function () {
    // console.log($(this).val());
    fileNum = $(this).val();
    $slide.attr('href', `images/product-item/eg/eg_${frame}_regular_${fileNum}.png`);
    $slide.attr({
        src: `images/product-item/eg/eg_${frame}_regular_${fileNum}.png`,
        alt: `${frame} ${lense} eyeglasses`
    });
});


// Utility Functions
// Capitalizes the first character in a string
// Code modified from this stackoverflow quesion:
// https://stackoverflow.com/questions/1026069/how-do-i-makeƒ-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Prevent the form from re-freshing the page
$('#glasses-form').submit(function (e) {
    e.preventDefault();
});

