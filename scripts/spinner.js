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
    // main t-shirt slide image
    const currentSrc = $slide.attr('src');

    // Grab the value of the radio button that was
    // checked...
    const lense = $(this).val();
    console.log(this);
    // Set the "src" attribute of the main slide to 
    // the color that was selected above (the "color" variable)
    // - Determine if the main slide is the: no-model, front or back
    //   image by searching the file path of the slide image
    /*
    if (currentSrc.includes('-front')) {
        $slide.attr('src', `images/t-shirt-${color}-front.jpg`);
    } else if (currentSrc.includes('-back')) {
        $slide.attr('src', `images/t-shirt-${color}-back.jpg`);
    } else {
        $slide.attr('src', `images/t-shirt-${color}-no-model.jpg`);
    }
    */
   
    // Change the thumbs to the color shirts that were selected
    // above (via the "color" variable)...
    // No Model
    $slide.attr('href', `images/product-item/sg/sg_rosegold_${lense}_01.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_rosegold_${lense}_01.png`,
        alt: `rosegold ${lense} sunglasses`
    });


    // Update the color output
    $selectedLenseOut.text(capitalizeFirstLetter(lense));


});

// Size Checkbox
$checkboxSize.on('change', function () {

    const size = $(this).val().toUpperCase();
    $btnAddToCart.val('Add to Cart')
        .removeAttr('disabled');
    $selectedSizeOut.text(size);

});

// Utility Functions

// Capitalizes the first character in a string
// Code modified from this stackoverflow quesion:
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Prevent the t-shirt form from re-freshing the page...
// ...Not really part of the core script, but leave it in
// otherwise the page will refresh whenever you submit
// the form...
$('#t-shirt-form').submit(function (e) {
    e.preventDefault();
});
