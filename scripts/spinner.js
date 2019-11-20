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




var lense = document.querySelector('input[name="lense-color"]:checked').value;
var frame = document.querySelector('input[name="frame-color"]:checked').value;


$checkboxLense.on('change', function () {
    lense = $(this).val();
    console.log(lense, frame)
    $slide.attr('href', `images/product-item/sg/sg_${frame}_${lense}_1.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_${frame}_${lense}_1.png`,
        alt: `${frame} ${lense} sunglasses`
    });

    // Update the color output
    $selectedLenseOut.text(capitalizeFirstLetter(lense));
});



$checkboxFrame.on('change', function () {
    frame = $(this).val();
    console.log(lense, frame)
    $slide.attr('href', `images/product-item/sg/sg_${frame}_${lense}_1.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_${frame}_${lense}_1.png`,
        alt: `${frame} ${lense} sunglasses`
    });

    // Update the color output
    $selectedFrameOut.text(capitalizeFirstLetter(frame));
});


/*
// Range slider from Codepen 
const body = document.querySelector("body");
const productSlider = document.querySelector(".product__slider");

function updateShoe() {
    // need to move to the left, not right
    document.querySelector('.item-img').style.setProperty("--pos", productSlider.value * -1);
}

// mousemove swaps values as moving, change only updates after letting go
productSlider.addEventListener("mousemove", updateShoe);

// Mobile fixes here since the range input is finnicky on phones

function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

body.addEventListener("touchmove", e => {
    swipeShoe(e);
});

function swipeShoe(e) {
    const touchPos = e.touches[0].clientX;
    // clamp between 0 / 12;
    let clamped = Math.round(
        map(Math.round(touchPos), 1, window.innerWidth, 0, 11)
    );
    // off chance you touch into the code area
    if (clamped < 0) {
        clamped = 0;
    }
    if (clamped > 11) {
        clamped = 11;
    }

    document.querySelector('.productSlider').style.setProperty("--pos", clamped * -1);
}
*/


// Range slider from W3C School 
var rangeSlider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = rangeSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rangeSlider.oninput = function () {
    output.innerHTML = this.value;
}



// Utility Functions

// Capitalizes the first character in a string
// Code modified from this stackoverflow quesion:
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Prevent the form from re-freshing the page
$('#glasses-form').submit(function (e) {
    e.preventDefault();
});

