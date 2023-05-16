//Author: Zhayida Haishan

// ------- This is the js for Temperature Converter html ------- //

"use strict";

window.onload = init;

function init(){
    const convertFahrenheitBtn = document.getElementById("convertFahrenheitBtn");
    const clearBtn = document.getElementById("resetForm");

    convertFahrenheitBtn.onclick = onConvertFahrenheitBtnClicked;
    clearBtn.onclick = onClearBtnClicked
}

function onConvertFahrenheitBtnClicked(){
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field)) {
        messagePara.innerHTML = "Your input values are invalid!";
        return; // exit the addBtnClicked function
    }

    const answer = (number1Field - 32) * 5/9;
    const answerField = document.getElementById("answerField");
    answerField.value = answer.toFixed(2);

    // clear any previous error message
    messagePara.innerHTML = "";
}
