document.querySelector(".cursedBabyTalk").classList.add("hidden");
var input = document.querySelector(".batten");

function AI() {
  let bild2 = document.querySelector(".cursedBabyTalk");
  const words = [
    "im trippin balls",
    "FUCK KIDZ",
    "bruh",
    "suuuure",
    "mannnn im gon",
    "are you black?",
    "cob",
    "die",
    "Funny",
    "LEEEES GOOOOOO!!!",
    "u stupid bieatch",
    "i forgor...",
    "horny hehehe",
    "WANNA START A RAPE BATTLE?",
    "MONEY BABY!!",
  ];
  // Variable declaration
  let randomNumber = Math.floor(Math.random() * words.length);
  let inputVal = document.getElementById("input").value;
  let dababyAnswer = (document.querySelector(".answer").textContent =
    words[randomNumber]);
  // The AI section
  if (inputVal === "") {
    document.querySelector(".cursedBabyTalk").classList.remove("hidden");
    new Audio("../mp3/stupidBitch.mp3").play();
    document.querySelector(".answer").textContent =
      "You stupid BITCH. Write something";
    setTimeout(() => {
      bild2.classList.add("hidden");
      document.querySelector(".answer").textContent = "wassup nigga";
    }, 3500);
  } else if (dababyAnswer === "LEEEES GOOOOOO!!!") {
    document.querySelector(".cursedBabyTalk").classList.remove("hidden");
    new Audio("../mp3/lesGoo.mp3").play();
    setTimeout(() => {
      bild2.classList.add("hidden");
    }, 2000);
  } else if (dababyAnswer === "bruh") {
    document.querySelector(".cursedBabyTalk").classList.remove("hidden");
    new Audio("../mp3/bruh.mp3").play();
    setTimeout(() => {
      bild2.classList.add("hidden");
    }, 1500);
  } else if (dababyAnswer === "u stupid bieatch") {
    document.querySelector(".cursedBabyTalk").classList.remove("hidden");
    new Audio("../mp3/stupidBitch.mp3").play();
    setTimeout(() => {
      bild2.classList.add("hidden");
    }, 4000);
  } else {
    document.querySelector(".answer").textContent = dababyAnswer;
  }
}
function home() {
  window.location = "http://webarea.se/";
}
