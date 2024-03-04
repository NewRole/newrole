var secretNumber = Math.floor(Math.random() * 10000) + 1;

function checkGuess() {
    var userGuess = parseInt(document.getElementById("userGuess").value, 10);
    var difference = Math.abs(secretNumber - userGuess);
    var resultText = "";

    if (userGuess === secretNumber) {
        resultText = "Поздравляем! Вы угадали число.";
    } else if (userGuess < secretNumber) {
        if (difference <= 10) {
            resultText = "Очень горячо! Загаданное число немного больше.";
        } else if (difference <= 100) {
            resultText = "Горячо. Загаданное число больше.";
        } else {
            resultText = "Холодно. Загаданное число значительно больше.";
        }
    } else { // userGuess > secretNumber
        if (difference <= 10) {
            resultText = "Очень горячо! Загаданное число немного меньше.";
        } else if (difference <= 100) {
            resultText = "Горячо. Загаданное число меньше.";
        } else {
            resultText = "Холодно. Загаданное число значительно меньше.";
        }
    }

    document.getElementById("result").innerHTML = resultText;
}

function result1() {
    var aibolitValue = document.getElementById("aibolit").value;
    var outputElement = document.getElementById("result1");

    if (aibolitValue.toLowerCase() === "айболит") {
        outputElement.textContent = "Верно!";
        changeImage("Верно!", "resultImage1");
    } else {
        outputElement.textContent = "Неверно.";
        changeImage("Неверно.", "resultImage1"); 
    }
}

function result2() {
   var kotValue = document.getElementById("kot").value; 
    var outputElement = document.getElementById("result2"); 

    if (kotValue.toLowerCase() === "кот") {
        outputElement.textContent = "Верно!";
        changeImage("Верно!", "resultImage2");
    } else {
        outputElement.textContent = "Неверно."; 
        changeImage("Неверно.", "resultImage2"); 
    }
}

function result3() {
   var apleValue = document.getElementById("aple").value; 
    var outputElement = document.getElementById("result3"); 

    if (apleValue.toLowerCase() === "яблоко") {
        outputElement.textContent = "Верно!";
        changeImage("Верно!", "resultImage3");
    } else {
        outputElement.textContent = "Неверно."; 
        changeImage("Неверно.", "resultImage3");  
    }
}

function result4() {
   var komarValue = document.getElementById("komar").value; 
    var outputElement = document.getElementById("result4"); 

    if (komarValue.toLowerCase() === "комар") {
        outputElement.textContent = "Верно!";
        changeImage("Верно!", "resultImage4"); 
    } else {
        outputElement.textContent = "Неверно."; 
        changeImage("Неверно.", "resultImage4");
    }
}

function result5() {
   var dveValue = document.getElementById("dve").value; 
    var outputElement = document.getElementById("result5"); 

    if (dveValue.toLowerCase() === "четыре" || parseInt(dveValue) === 4)  {
        outputElement.textContent = "Верно!";
        changeImage("Верно!", "resultImage5");
    } else {
        outputElement.textContent = "Неверно."; 
        changeImage("Неверно.", "resultImage5");  
    }
}

function changeImage(result, elementId) {
    var imgElement = document.getElementById(elementId);
    imgElement.src = result === "Верно!" ? "321.gif" : "123.gif";
    imgElement.style.visibility = "visible"; 
}