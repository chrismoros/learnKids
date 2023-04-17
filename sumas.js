function generateQuestion() {
    // Generate two random numbers between 1 and 10
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    // Calculate the correct answer
    var answer = num1 + num2;
    // Display the question
    document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ?";
    // Generate three random options
    var options = [];
    for (var i = 0; i < 3; i++) {
        var option = Math.floor(Math.random() * 20) + 1;
        if (option != answer) {
            options.push(option);
        }
    }
    // Add the correct option
    options.push(answer);
    // Shuffle the options
    options.sort(function() { return 0.5 - Math.random() });
    // Display the options
    for (var i = 0; i < options.length; i++) {
        document.getElementById("option" + (i+1)).innerHTML = options[i];
    }
    // Store the correct answer
    localStorage.setItem("correctAnswer", answer);
    // Reset the result message
    document.getElementById("result").style.backgroundColor = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
}

function checkAnswer(selectedOption) {
    var correctAnswer = localStorage.getItem("correctAnswer");
    if (selectedOption == correctAnswer) {
        document.getElementById("result").innerHTML = "Correcto!";
    document.getElementById("correct").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
    } else {
        document.getElementById("result").innerHTML = "Incorrecto. Prueba otra vez!";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "block";
    }
}

