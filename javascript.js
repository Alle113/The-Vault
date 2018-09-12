
var Person = [
'Donald Trump',
'Jan Björklund',
'Dag Fredriksson',
'Jimmie Åkessons halvbror',
'Jultomten',
'Micke Persbrandt',
'Foppa',
'Zlatan'
]

function newPerson() {
    var randomNumber = Math.floor(Math.random() * (8));
    document.getElementById("randompersonDisplay").innerHTML = Person[randomNumber];
}

function play(){
       var audio = document.getElementByTag("audio");
       audio.play();
}

$('.remove-img').click(function(e) {
    $( this ).parent().find("img").remove();
});


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
