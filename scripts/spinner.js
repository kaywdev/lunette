// Created based on Spinner v1.0  
// by: Michael Whyte
// c. 2019 


// Buttons
const btnRotateCW = document.getElementById('btn-rotate-clockwise');
const btnRotateCCW = document.getElementById('btn-rotate-counter-clockwise');

// Slide Variables

// Slide Container
const slideContainer = document.getElementById('slide-container');

// Slide
const slide = document.getElementById('slide');

// Number of slides
const numberOfSlides = 12;

// Counter - used to keep track of the current slide
// *** We start out at slide 1, which is position
// zero in our bikeImages array
let counter = 0;

// Slide Change Rate;
let changeRate = 8;

// Create Slides
const slides = createImages(numberOfSlides, 'glasses');

// Mouse Variables

// Mouse Position
let mx;
// Is the Mouse Down
let isMouseDown = false;

// Event Listeners
slideContainer.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    mx = e.clientX;
});

slideContainer.addEventListener('mouseup', function (e) {
    isMouseDown = false;
    mx = e.clientX;
});

slideContainer.addEventListener('mouseleave', function (e) {
    isMouseDown = false;
    mx = null;
});


slideContainer.addEventListener('mousemove', function (e) {
    // Fast fail
    // - Kill the function if the mouse
    //   is not down 
    if (!isMouseDown) {
        return;
    }

    // Get the new position of the mouse
    let newMX = e.clientX;

    if (newMX < (mx - changeRate)) {
        // add 1 to the counter
        counter++;
        // If the counter is equal to the length of
        // our array of bike images it means we have 
        // reached the last slide. We should then reset
        // the counter to zero to return to the first
        // slide
        if (counter === numberOfSlides) {
            counter = 0;
        }
        // Update the image on the screen
        slide.src = slides[counter].src;
        // Update the mouse position
        mx = newMX;
    } else if (newMX > (mx + changeRate)) {
        // subtract 1 from the counter
        counter--;
        // If the counter is less than zero, it 
        // means we have reached the beginning of
        // our bike images. We should then reset
        // the counter to point to the last bike
        // image in the array
        if (counter < 0) {
            counter = numberOfSlides - 1;
        }
        // Update the image on the screen
        slide.src = slides[counter].src;
        // Update the mouse position
        mx = newMX;
    }
});

// Prevent Browser Behaviour on Mousedown of image
slide.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

// Script Functions

// createImages
// - Creates an array of images
function createImages(numberOfImages, imageName) {
    const imageList = [];

    // Use a loop to generate the array of 12 glasses images
    for (let i = 1; i <= numberOfImages; i++) {
        const img = new Image();
        // Set the "src" property of the newly
        // created image object
        img.src = `images/product-item/sg/glasses/${imageName}-0${i}.jpg`;
        // Append the new image to the
        // imageList
        imageList.push(img);
    }

    return imageList;
}


