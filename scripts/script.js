// Responsive Menu - Dropdown
const body = document.body;
const hamburger = document.getElementById('hamburger');
const gotoTop = document.getElementById('gotopbtn');
const search = document.getElementById('search');
const searchBar= document.getElementById('search-bar');



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
 searchBar.classList.toggle('show');
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