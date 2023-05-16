//Author: Zhayida Haishan

// ------- This is the js for Temperature Converter html ------- //

"use strict";

window.onload = init;

function init(){
    const convertCelsiusBtn = document.getElementById("convertCelsiusBtn");
    const clearBtn = document.getElementById("resetForm");

    convertCelsiusBtn.onclick = onConvertCelsiusBtnClicked;
    clearBtn.onclick = onClearBtnClicked
}

function onConvertCelsiusBtnClicked(){
    //find HTML elements
    const number1Field = Number(document.getElementById("number1Field").value);
    const messagePara = document.getElementById("messagePara");

    // check to see of user inputs were invalid
    if (isNaN(number1Field)) {
        messagePara.innerHTML = "Your input values are invalid!";
        return; // exit the addBtnClicked function
    }

    const answer = number1Field * 9/5 + 32;
    const answerField = document.getElementById("answerField");
    answerField.value = answer.toFixed(2);

    // clear any previous error message
    messagePara.innerHTML = "";
}


function onClearBtnClicked(){
    document.getElementById("number1Field").value = "";
    document.getElementById("answerField").value = "";
    document.getElementById("messagePara").innerHTML = "";
    }
