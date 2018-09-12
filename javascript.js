
var Person = [
'Donald Trump',
'Jan Björklund',
'Någon som inte borde vara här',
'Jimmie Åkessons halvbror',
'En skön typ som bor vid Mariatorget',
'Beatrisk Asks buksvåger',
'Du verkar vara en skön typ, mejla mig',
'Fredrik Snortare'
]

function newPerson() {
    var randomNumber = Math.floor(Math.random() * (8));
    document.getElementById("randompersonDisplay").innerHTML = Person[randomNumber];
}

function play(){
       var audio = document.getElementByTag("audio");
       audio.play();
}
