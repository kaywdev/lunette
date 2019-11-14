// Shopping Cart - v1.0

// *** Feel free to change any of this script...
// ...thee are just starter variables and event
// handlers to help you get started...feel free
// to delete or modify...
//

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


// Event Handlers
/*
$thumbs.on('click mouseenter focus', function (e) {
    e.preventDefault();
    // Get the thumbnail image of the thumbnail
    // link that was clicked on...
    const $thumb = $(this).children('img');
    // Get the "src" attribute value and the
    // "alt" attribute value from the thumbnail image
    // that was clicked on...
    const src = $thumb.attr('src');
    const alt = $thumb.attr('alt');
    // Set the "src" and "alt" attribute of the
    // main slide to the new "src" and "alt" variable
    // values
    $slide.attr({
        src: src,
        alt: alt
    });

})
*/

// Thumbnails
// Thumbnail event handler here

// Lense Checkbox
$checkboxLense.on('change', function () {

    // Grab the current src attribute value of the 
    // main glasses slide image
    const currentSrc = $slide.attr('src');

    // Grab the value of the radio button that was
    // checked...
    const lense = $(this).val();
    // console.log(this);

    $slide.attr('href', `images/product-item/sg/sg_rosegold_${lense}_1.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_rosegold_${lense}_1.png`,
        alt: `rosegold ${lense} sunglasses`
    });


    // Update the color output
    $selectedLenseOut.text(capitalizeFirstLetter(lense));


});

// Frame Checkbox
$checkboxFrame.on('change', function () {

    // Grab the value of the radio button that was
    // checked...
    const frame = $(this).val();
    console.log(this);

    $btnAddToCart.val('Add to Cart')
        .removeAttr('disabled');
    $selectedFrameOut.text(capitalizeFirstLetter(frame));

});

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

