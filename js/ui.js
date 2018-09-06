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
    });
  }
}
