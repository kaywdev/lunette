// Responsive Menu - Dropdown
const body = document.body;
const hamburger = document.getElementById('hamburger');
const gotoTop = document.getElementById('gotopbtn');
const search = document.getElementById('search');
const searchForm= document.getElementById('search-form');



hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('mousedown', function(e){
    e.preventDefault();
});

function openMenu(){
    body.classList.toggle('show');
}

search.addEventListener('click', openSearch);
search.addEventListener('mousedown', function(e){
  e.preventDefault();
});

function openSearch(){
 searchForm.classList.toggle('visible');
}


// Show / Hide Menu
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    gotoTop.style.visibility = 'visible';
  } else {
    gotoTop.style.visibility ='hidden';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  //Smooth Scroll
 const scroll = new SmoothScroll('a[href*="#"]',  {
      offset: 20,
      speed:500,
      speedAsDuration: true,
      durationMax:500
  });

  //slides js
  $(document).ready(function(){
    $('.style-gallery').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

