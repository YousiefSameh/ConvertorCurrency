const form = document.querySelector("form");
let fromCurrency = document.querySelector("#fromCurrency");
let amount = document.querySelector("input");
let toCurrency = document.querySelector("#toCurrency");

form.onsubmit = (event) => {
  event.preventDefault();
  let API_KEY = "df1ca40698e67db1d825ee3c";
  let BASE_URL = "https://v6.exchangerate-api.com/v6/";
  let CONVERT_URL = `/pair/${fromCurrency.value}/${toCurrency.value}`;
  let API_URL = BASE_URL + API_KEY + CONVERT_URL;
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    showData(data);
  })
}

function showData(data) {
  if (data.result === "success") {
    let conversionRate = data.conversion_rate;
    let conversionResult = (amount.value * conversionRate).toFixed(2);
    let result = document.querySelector("#result");
    result.innerHTML = conversionResult;
  } else {
    document.getElementById('result').innerText = `Error: ${data['error-type']}`;
  }
}