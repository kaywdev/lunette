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



// ------------------------- TEST 1 ---------------------------
// // Current checked Radio button - Lense color
// const lenseRadios = document.getElementsByName('lense-color');
// function findLense(){
//     for (var i = 0, length = lenseRadios.length; i < length; i++) {
//         if (lenseRadios[i].checked) {
//             const currentLense = lenseRadios[i].value;
//             alert(currentLense);
            
//         }
//     };
// };

// // Current checked Radio button - Frame color
// const frameRadios = document.getElementsByName('frame-color');
// function findFrame(){
//     for (var i = 0, length = frameRadios.length; i < length; i++) {
//         if (frameRadios[i].checked) {
//             const currentFrame = frameRadios[i].value;
//             alert(currentFrame);

//         }
//     };
// };

/*
$checkboxLense.on('change', function () {
    findLense();
});



$checkboxFrame.on('change', function () {
    findFrame();
});




// ------------------------- TEST 2 ---------------------------
/*
(function () {
    var radios = document.getElementsByName('lense-color');
    var radios2 = document.getElementsByName('frame-color');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onclick = function () {
            // console.log(this.value);
            const currentLense = this.value;
            // console.log(currentLense);
        }
    }
    for (var i = 0; i < radios2.length; i++) {
        radios2[i].onclick = function () {
            // console.log(this.value);
            const currentFrame = this.value;
            // console.log(currentFrame);
        }
    }
    console.log(currentFrame);
    // console.log(${ currentFrame } ${ currentLense } sunglasses)
})();
*/


// ------------------------- TEST 3..failed ---------------------------
/*
$checkboxLense.on('change', function () {
    $('input[name=lense-color], input[name=frame-color]').change(function () {
        // $('#image').prop('src', $('input[name=lense-color]:checked').val() + '-' + $('input[name=rframe-color]:checked').val() + '.jpg');
        $('#image').prop('src', `images/produt-item/sg/sg_${('input[name=lense-color]:checked').val()} + '-' 
        + ${('input[name=rframe-color]:checked').val()} + '.jpg'`);
    };
});
*/



/*
function combineLenseFrame(currentLense, currentFrame) {
    $slide.attr('href', `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`,
        alt: `${currentFrame} ${currentLense} sunglasses`
    });
}
*/



/*
// Grab the current src attribute value of the 
// main glasses slide image
const currentSrc = $slide.attr('src');
// Grab the value of the radio button that was
// checked...
const currentLense = $checkboxLense('change').attr('value'); 
// const currentLense = $(this).val();
// const currentFrame = $()
// const lense = $(this).val();
console.log(currentLense);

const currentFrame = 

$slide.attr('href', `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`);
$slide.attr({
    src: `images/product-item/sg/sg_${currentFrame}_${currentLense}_1.png`,
    alt: `${currentFrame} ${currentLense} sunglasses`
});

// Update the color output
$selectedLenseOut.text(capitalizeFirstLetter(lense));

*/



/*
// Frame Checkbox
$checkboxFrame.on('change', function () {

    // Grab the value of the radio button that was
    // checked...
    const frame = $(this).val();
    console.log(this);

    $slide.attr('href', `images/product-item/sg/sg_rosegold_${lense}_1.png`);
    $slide.attr({
        src: `images/product-item/sg/sg_rosegold_${lense}_1.png`,
        alt: `rosegold ${lense} sunglasses`
    });



    $btnAddToCart.val('Add to Cart')
        .removeAttr('disabled');
    $selectedFrameOut.text(capitalizeFirstLetter(frame));

});

*/


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

