let price = 0;
let percentage = 0;
const tip = () => price * percentage;
const total = () => price + tip();

const priceInput = document.getElementById("price") as HTMLInputElement;
const percentageInput = document.getElementById("percentage") as HTMLInputElement;
const tipOutput = document.getElementById("tip") as HTMLLabelElement;
const totalOutput = document.getElementById("total") as HTMLLabelElement;

const updateUI = () => {
    tipOutput.textContent = tip().toFixed(2);
    totalOutput.textContent = total().toFixed(2);
};

const setPrice = (n: number) => {
    price = n;
    updateUI();
};

const setPercentage = (n: number) => {
    percentage = n / 100;
    updateUI();
};

priceInput.addEventListener("change", () => setPrice(parseFloat(priceInput.value) || 0));
percentageInput.addEventListener("change", () => setPercentage(parseFloat(percentageInput.value) || 0));