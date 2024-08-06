

const base_URL = "https://api.exchangerate-api.com/v4/latest/INR?base";



let output = document.querySelector(".output")
let drpdown = document.querySelectorAll(".changer select");
let butn = document.querySelector(".last-btn .btn");

for( select of drpdown){
  for (key in countryList) {
  let newoptions = document.createElement("option");
 newoptions.innerText = key;
  newoptions.value = key;
select.append(newoptions)
}}

//from
let dropdowns = document.querySelector(".c1 select");
 dropdowns.addEventListener("change", () => {
 const from = dropdowns.options[dropdowns.selectedIndex].innerText;
});

//to
 let dropdown = document.querySelector(".c3 select");
 dropdown.addEventListener("change",  () => {
const  to = dropdown.options[dropdown.selectedIndex].innerText;
 });

butn.addEventListener("click", async ()=>{
 let amount =  document.querySelector(".inputer input");

    let amtval = amount.value;
    if(amtval==="" || amtval < 0 ){
      amount.value = 1; 
        amtval = 1;
   }
     let abc = from.value;
    let xyz = to.value;
    let URL = `${base_URL}=${abc}&symbols=${xyz}`
   
  let pkrResponse = await fetch(URL);
  let pkrData = await pkrResponse.json();
  const pkrRate = pkrData.rates[xyz];
 
const convertedAmount = amtval * pkrRate;
//console.log(convertedAmount);
output.innerText = `${amtval} ${abc} = ${convertedAmount} ${xyz}`;
output.style.color = "red";
});



