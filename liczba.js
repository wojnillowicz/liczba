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
      console.log("Brawo, zgadłaś/eś!");
      $('.tomusizniknac').fadeOut('slow');
      document.getElementById("wynik").innerHTML = "<h1>Brawo, zgadłaś/eś!</h1><p>Twoja szczęśliwa liczba to: </p>"+luckyNumber
    }else if (userGuess > luckyNumber) {
      console.log("Twoja liczba jest za duza"+userGuess);
      document.getElementById("info").style.color = "red"
      document.getElementById("info").innerHTML = "Twoja liczba jest za duża!"
      count ++
      document.getElementById("duze").style.color = "white"
      var zaDuza = document.getElementById("duze")
      var duzaLiczba = document.createTextNode(userGuess+", ")
      zaDuza.appendChild(duzaLiczba);
      document.getElementById("pozostalo").innerHTML = "Pozostało prób: "+(10-count)
    }else {
      console.log("Twoja liczba jest za mala"+userGuess);
      document.getElementById("info").style.color = "green"
      document.getElementById("info").innerHTML = "Twoja liczba jest za mała!"
      count ++
      document.getElementById("male").style.color = "white"
      var zaMala = document.getElementById("male")
      var malaLiczba = document.createTextNode(userGuess+", ")
      zaMala.appendChild(malaLiczba);
      document.getElementById("pozostalo").innerHTML = "Pozostało prób: "+(10-count)
      }
  }else {
    document.write = "Game over!"
    $('.tomusizniknac').fadeOut('slow');
    document.getElementById("wynik").innerHTML = "<h1>Game over</h1>Wykorzystałaś/eś wszystkie próby...<br> Spróbuj jeszcze raz!"
  }

});
