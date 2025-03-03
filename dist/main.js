"use strict";
let price = 0;
let percentage = 0;
const tip = () => price * percentage;
const total = () => price + tip();
const priceInput = document.getElementById("price");
const percentageInput = document.getElementById("percentage");
const tipOutput = document.getElementById("tip");
const totalOutput = document.getElementById("total");
const updateUI = () => {
    tipOutput.textContent = tip().toFixed(2);
    totalOutput.textContent = total().toFixed(2);
};
const setPrice = (n) => {
    price = n;
    updateUI();
};
const setPercentage = (n) => {
    percentage = n / 100;
    updateUI();
};
priceInput.addEventListener("change", () => setPrice(parseFloat(priceInput.value) || 0));
percentageInput.addEventListener("change", () => setPercentage(parseFloat(percentageInput.value) || 0));
