const base_URL = "https://api.exchangerate-api.com/v4/latest";

 
let output = document.querySelector(".output");
let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");
let amountInput = document.getElementById("input");
let convertBtn = document.querySelector(".last-btn .btn");

 
for (let currency in countryList) {
    let option1 = document.createElement("option");
    option1.value = currency;
    option1.innerText = currency;

    let option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
} 
fromSelect.value = "USD";
toSelect.value = "PKR";
 
convertBtn.addEventListener("click", async () => {
    let amtVal = amountInput.value;

    if (amtVal === "" || amtVal <= 0) {
        amtVal = 1;
        amountInput.value = 1;
    }

    let fromCurrency = fromSelect.value;
    let toCurrency = toSelect.value;

    let URL = `${base_URL}/${fromCurrency}`;
    try {
        let response = await fetch(URL);
        let data = await response.json();
 
        if (!data.rates[toCurrency]) {
            output.innerText = "Currency not available!";
            output.style.color = "red";
            return;
        }

        let rate = data.rates[toCurrency];
        let convertedAmount = (amtVal * rate).toFixed(2);

        output.innerText = `${amtVal} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        output.style.color = "green";
    } catch (error) {
        console.error(error);
        output.innerText = "Error fetching data!";
        output.style.color = "red";
    }
});
 
const aboutBtn = document.getElementById("aboutBtn");
const countriesBtn = document.getElementById("countriesBtn");
const aboutSection = document.querySelector(".about-section");
const countriesSection = document.querySelector(".countries-section");
const container = document.querySelector(".container");
const introSection = document.querySelector(".intro-section");
const navLogo = document.querySelector(".nav-logo");
 
function showSection(sectionToShow) {
    const sections = [aboutSection, countriesSection, container, introSection];
    sections.forEach(sec => {
        if (sec === sectionToShow) {
            sec.style.display = "flex";
            sec.style.justifyContent = "center";
            sec.style.alignItems = "center";
        } else {
            sec.style.display = "none";
        }
    });
}
 
aboutBtn.addEventListener("click", () => {
    showSection(aboutSection);
});

countriesBtn.addEventListener("click", () => {
    showSection(countriesSection);
});
 
navLogo.addEventListener("click", () => {
    introSection.style.display = "flex";
    introSection.style.justifyContent = "center";
    introSection.style.alignItems = "center";

    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    aboutSection.style.display = "none";
    countriesSection.style.display = "none";
});
 
const countryListElem = document.getElementById("countryList");
const totalCountriesElem = document.getElementById("totalCountries");
 
const countries = Object.keys(countryList);
 
totalCountriesElem.textContent = countries.length;

countries.forEach(code => {
    let li = document.createElement("li");
    li.textContent = `${code}   ->    ${countryList[code]}`;
    countryListElem.appendChild(li);
});

window.addEventListener("DOMContentLoaded", () => {
    introSection.style.display = "flex";
    introSection.style.justifyContent = "center";
    introSection.style.alignItems = "center";

    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    aboutSection.style.display = "none";
    countriesSection.style.display = "none";
});

