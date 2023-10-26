"use strict";

window.onload = init;
const toppingsList = document.getElementById("toppingsList");
const iceCream = document.getElementById("iceCream");
iceCream.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
}

function init() {
    const orderBtn = document.getElementById("orderBtn");

    const radioBtns = document.querySelectorAll('input[name="flexRadioDefault"]');

    radioBtns.forEach(radio => {
        radio.addEventListener('click', radioClick);
    });
    orderBtn.onclick = calculateOrder;

}

function calculateOrder() {
    const numScoops = Number(document.getElementById("numScoopsText").value);

    if (numScoops > 0 && numScoops < 5) {
        const sprinklesCheck = document.getElementById("sprinklesCheck");
        const whipCreamCheck = document.getElementById("whippedCreamCheck");
        const hotFudgeCheck = document.getElementById("hotFudgeCheck");
        const cherryCheck = document.getElementById("cherryCheck");

        let basePrice = 2.25 + (1.25 * (numScoops - 1));

        if (sprinklesCheck.checked) {
            basePrice += 0.5;
        }
        if (whipCreamCheck.checked) {
            basePrice += 0.25;
        }
        if (hotFudgeCheck.checked) {
            basePrice += 1.25;
        }
        if (cherryCheck.checked) {
            basePrice += 0.25;
        }

        let tax = (basePrice * 0.06625);
        let total = basePrice + tax;


        document.getElementById("basePrice").innerText = "$" + basePrice.toFixed(2);
        document.getElementById("taxCost").innerText = "$" + tax.toFixed(2);
        document.getElementById("totalCost").innerText = "$" + total.toFixed(2);
    }
    else{
        document.getElementById("basePrice").innerText = "$xx.xx";
        document.getElementById("taxCost").innerText = "$xx.xx";
        document.getElementById("totalCost").innerText = "$xx.xx";
    }
}

function radioClick() {
    if (document.getElementById("cupRadio").checked) {
        toppingsList.style.display = "block";
    }
    else {
        toppingsList.style.display = "none";
        document.getElementById("sprinklesCheck").checked = false;
        document.getElementById("whippedCreamCheck").checked = false;
        document.getElementById("hotFudgeCheck").checked = false;
        document.getElementById("cherryCheck").checked = false;

    }
}

