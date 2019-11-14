
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



// Lense Checkbox
$checkboxLense.on('change', function () {

    // Grab the current src attribute value of the 
    // main glasses slide image
    const currentSrc = $slide.attr('src');

    // Grab the value of the radio button that was
    // checked...
    const lense = $(this).val();
    let currentLense = lense;


    // Update the lense output
    $selectedLenseOut.text(capitalizeFirstLetter(lense));
    console.log(currentLense);
});



// // Frame Checkbox
// $checkboxFrame.on('change', function () {

//     // Grab the value of the radio button that was
//     // checked...
//     const frame = $(this).val();
//     let currentFrame = frame;
//     console.log(currentFrame);

//     $btnAddToCart.val('Add to Cart')
//                  .removeAttr('disabled');

//      // Update the lense output
//     $selectedFrameOut.text(capitalizeFirstLetter(frame));
    
// });


// // Image output
// $slide.attr('href', `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`);
// $slide.attr({
//     src: `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`,
//     alt: `${currentFrame} ${currentLense} sunglasses`
// });


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

