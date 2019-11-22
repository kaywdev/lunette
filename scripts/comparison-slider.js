// Comparison Images Slider
// From W3C School code...
// https://www.w3schools.com/howto/howto_js_image_comparison.asp

// function initComparisons() {
//     var x, i;
//     /* Find all elements with an "overlay" class: */
//     x = document.getElementsByClassName("img-comp-overlay");
//     for (i = 0; i < x.length; i++) {
//         /* Once for each "overlay" element:
//         pass the "overlay" element as a parameter when executing the compareImages function: */
//         compareImages(x[i]);
//     }
//     function compareImages(img) {
//         var slider, img, clicked = 0, w, h;
//         /* Get the width and height of the img element */
//         w = img.offsetWidth;
//         h = img.offsetHeight;
//         /* Set the width of the img element to 50%: */
//         img.style.width = (w / 2) + "px";
//         /* Create slider: */
//         slider = document.createElement("DIV");
//         slider.setAttribute("class", "img-comp-slider");
//         /* Insert slider */
//         img.parentElement.insertBefore(slider, img);
//         /* Position the slider in the middle: */
//         slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
//         slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
//         /* Execute a function when the mouse button is pressed: */
//         slider.addEventListener("mousedown", slideReady);
//         /* And another function when the mouse button is released: */
//         window.addEventListener("mouseup", slideFinish);
//         /* Or touched (for touch screens: */
//         slider.addEventListener("touchstart", slideReady);
//         /* And released (for touch screens: */
//         window.addEventListener("touchstop", slideFinish);
//         function slideReady(e) {
//             /* Prevent any other actions that may occur when moving over the image: */
//             e.preventDefault();
//             /* The slider is now clicked and ready to move: */
//             clicked = 1;
//             /* Execute a function when the slider is moved: */
//             window.addEventListener("mousemove", slideMove);
//             window.addEventListener("touchmove", slideMove);
//         }
//         function slideFinish() {
//             /* The slider is no longer clicked: */
//             clicked = 0;
//         }
//         function slideMove(e) {
//             var pos;
//             /* If the slider is no longer clicked, exit this function: */
//             if (clicked == 0) return false;
//             /* Get the cursor's x position: */
//             pos = getCursorPos(e)
//             /* Prevent the slider from being positioned outside the image: */
//             if (pos < 0) pos = 0;
//             if (pos > w) pos = w;
//             /* Execute a function that will resize the overlay image according to the cursor: */
//             slide(pos);
//         }
//         function getCursorPos(e) {
//             var a, x = 0;
//             e = e || window.event;
//             /* Get the x positions of the image: */
//             a = img.getBoundingClientRect();
//             /* Calculate the cursor's x coordinate, relative to the image: */
//             x = e.pageX - a.left;
//             /* Consider any page scrolling: */
//             x = x - window.pageXOffset;
//             return x;
//         }
//         function slide(x) {
//             /* Resize the image: */
//             img.style.width = x + "px";
//             /* Position the slider: */
//             slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
//         }
//     }
// }

// initComparisons();

// Call & init
$(document).ready(function(){
    $('#gls-slide').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
  });
  
  // Update sliders on resize. 
  // Because we all do this: i.imgur.com/YkbaV.gif
  $(window).resize(function(){
    $('#gls-slide').each(function(){
      var cur = $(this);
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
    });
  });
  
  function drags(dragElement, resizeElement, container) {
      
    // Initialize the dragging event on mousedown.
    dragElement.on('mousedown touchstart', function(e) {
      
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');
      
      // Check if it's a mouse or touch event and pass along the correct value
      var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      // Get the initial position
      var dragWidth = dragElement.outerWidth(),
          posX = dragElement.offset().left + dragWidth - startX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth();
   
      // Set limits
      minLeft = containerOffset + 10;
      maxLeft = containerOffset + containerWidth - dragWidth - 10;
      
      // Calculate the dragging distance on mousemove.
      dragElement.parents().on("mousemove touchmove", function(e) {
          
        // Check if it's a mouse or touch event and pass along the correct value
        var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
        
        leftValue = moveX + posX - dragWidth;
        
        // Prevent going off limits
        if ( leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }
        
        // Translate the handle's left value to masked divs width.
        widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
              
        // Set the new values for the slider and the handle. 
        // Bind mouseup events to stop dragging.
        $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
          $(this).removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
        $('.resizable').css('width', widthValue);
      }).on('mouseup touchend touchcancel', function(){
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      e.preventDefault();
    }).on('mouseup touchend touchcancel', function(e){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
  }
  