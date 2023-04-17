// Select a random vowel
const vowels = ["A", "E", "I", "O", "U"];
let selectedVowel;

function getVowel(vowel) {
  const vowelEl = document.getElementById("vowel");
  vowelEl.textContent = vowel;
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "none";
}

// Display the selected vowel
const vowelEl = document.getElementById("vowel");

const images = document.querySelectorAll(".vowelImg img");
images.forEach(function (img) {
  img.addEventListener("click", function () {
    console.log(selectedVowel);
    // Check if the clicked image matches the selected vowel
    if (img.getAttribute("data-vowel") === selectedVowel) {
      // Display a success message

      const resultEl = document.getElementById("result");
      resultEl.textContent = "Correct!";
      resultEl.style.color = "green";
    } else {
      // Display an error message
      const resultEl = document.getElementById("result");
      resultEl.textContent = "Incorrect!";
      resultEl.style.color = "red";
    }
    // Speak the name of the clicked image
    const srcS = img.getAttribute("src");
    const pngS = srcS.replace(".png", "");
    const name2 = pngS.replace(/^.*[\\\/]/, "");

    const msg = new SpeechSynthesisUtterance(name2);
    speechSynthesis.speak(msg);
  });
});

function checkImage(img) {
  var correctAnswer = document.getElementById("vowel").innerHTML.toLowerCase();
  var selectedOption = img.src
    .toLowerCase()
    .charAt(img.src.toLowerCase().lastIndexOf("/") + 1)
    .charAt(0);
  if (selectedOption === correctAnswer) {
    document.getElementById("result").innerHTML = "Correcto!";
    document.getElementById("correct").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
  } else {
    document.getElementById("result").innerHTML =
      "Incorrecto. Prueba otra vez!";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "block";
  }
}

function shuffleAndSelectImages() {
  var imageContainer = document.getElementById("vowelImg");
  var images = [
    "vocales/a/Araña.png",
    "vocales/e/Estrella.png",
    "vocales/i/Iglu.png",
    "vocales/o/Oso.png",
    "vocales/u/Unicornio.png",
    "vocales/a/Avion.png",
    "vocales/e/Elenfante.png",
    "vocales/i/Iguana.png",
    "vocales/o/Oveja.png",
    "vocales/u/Uva.png",
  ];
  shuffleArray(images); // shuffle the array of images
  for (var i = 0; i < imageContainer.children.length; i++) {
    imageContainer.children[i].src = images[i];
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
