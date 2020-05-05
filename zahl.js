function getRandomInt(max) {

  return Math.floor(Math.random() * Math.floor(max));

}



var luckyNumber = getRandomInt(100);

console.log("Lucky number: "+luckyNumber);







var zgadnijButton = document.querySelector('button');

var count = 0;

var zaDuze = [];

var zaMale = [];



zgadnijButton.addEventListener('click', function checkGuess() {

  var userGuess = document.getElementById('zgadnij').value



  if (count < 10) {

    if (userGuess == luckyNumber) {

      console.log("Bravo! Gut geraten.");

      $('.tomusizniknac').fadeOut('slow');

      document.getElementById("wynik").innerHTML = "<h1>Bravo! Gut geraten.</h1><p>Deine glückliche Zahl ist: </p>"+luckyNumber

    }else if (userGuess > luckyNumber) {

      console.log("Deine Zahl ist zu groß"+userGuess);

      document.getElementById("info").style.color = "red"

      document.getElementById("info").innerHTML = "Deine Zahl ist zu groß!"

      count ++

      document.getElementById("duze").style.color = "white"

      var zaDuza = document.getElementById("duze")

      var duzaLiczba = document.createTextNode(userGuess+", ")

      zaDuza.appendChild(duzaLiczba);

      document.getElementById("pozostalo").innerHTML = "Verbleibende Versuche: "+(10-count)

    }else {

      console.log("Deine Zahl ist zu klein: "+userGuess);

      document.getElementById("info").style.color = "green"

      document.getElementById("info").innerHTML = "Deine Zahl ist zu klein!"

      count ++

      document.getElementById("male").style.color = "white"

      var zaMala = document.getElementById("male")

      var malaLiczba = document.createTextNode(userGuess+", ")

      zaMala.appendChild(malaLiczba);

      document.getElementById("pozostalo").innerHTML = "Verbleibende Versuche: "+(10-count)

      }

  }else {

    document.write = "Game over!"

    $('.tomusizniknac').fadeOut('slow');

    document.getElementById("wynik").innerHTML = "<h1>Game over</h1>Leider hast du alle deine Versuche verbraucht...<br> Probier es noch einmal!"

  }



});
