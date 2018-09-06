class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCryptoCurrencies();
  }
  // Prints the <option> for the form
  printCryptoCurrencies() {
    cryptoAPI.getCryptoCurrenciesList().then(data => {
      const cryptoCurrencies = data.cryptoCurrencies;

      //   Build the <select> from the REST API
      const select = document.getElementById("cryptocurrency");

      cryptoCurrencies.forEach(currency => {
        //add the option
        const option = document.createElement("option");
        option.value = currency.id;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }

  //   Print a message with 2 parameters, message and classes
  printMessage(message, className) {
    const div = document.createElement("div");

    //Add the classes
    div.className = className;
    // Add the message
    div.appendChild(document.createTextNode(message));

    const messageDiv = document.querySelector(".messages");

    messageDiv.appendChild(div);

    //Remove Message
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 3000);
  }

  displayResult(result, currency) {
    //Read the currency
    let currencyName;
    currencyName = "price_" + currency.toLowerCase();

    // read the result from the object
    const value = result[currencyName];

    console.log(value);

    let HTMLTemplate = "";

    HTMLTemplate += `
        <div class="card green darken-3">
            <div class="card-content white-text">
                <span class="card-title">Result</span>
                <p>The price of ${result.name} in ${currency} is ${value}</p>
            </div>
        </div>
    `;

    const divResult = document.querySelector("#result");
    divResult.innerHTML = HTMLTemplate;
  }
}
