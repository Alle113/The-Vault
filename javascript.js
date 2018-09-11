
var Person = [
'Donald Trump',
'Jan Bjorklund',
'Kim Kardashian',
'Jultomten',
'Person 7',
'Person 8',
'Person 9',
'Person 10'
]

function newPerson() {
    var randomNumber = Math.floor(Math.random() * (8));
    document.getElementById("randompersonDisplay").innerHTML = Person[randomNumber];
}

function play(){
       var audio = document.getElementById("audio");
       audio.play();
}
