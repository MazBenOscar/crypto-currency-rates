class CryptoAPI {
  // Get all cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch("https://api.coinmarketcap.com/v1/ticker/");

    //Return this is as json
    const cryptoCurrencies = await url.json();

    //Return the object
    return {
      cryptoCurrencies
    };
  }
}
