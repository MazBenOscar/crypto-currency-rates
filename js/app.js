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

  //Validate that the select has values
  if (currencySelect === "" || cryptoCurrencySelect === "") {
    //display an error
    ui.printMessage(
      "Please make a selection from both fields",
      "deep-orange darken-4 card-panel"
    );
  } else {
    // Query the REST API
    cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect).then(data => {
      ui.displayResult(data.result[0]);
    });
  }
});
