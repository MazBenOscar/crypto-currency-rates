// Instantiate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables

const form = document.getElementById("form");

//add Event listener
form.addEventListener("submit", e => {
  e.preventDefault();
  // read currency
  const currencySelect = document.getElementById("currency").value;
  //read cryptocurrency
  const cryptoCurrencySelect = document.getElementById("cryptocurrency").value;

  console.log(currencySelect + ":" + cryptoCurrencySelect);
});
