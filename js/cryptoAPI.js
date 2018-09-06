class CryptoAPI {
  //Query the Rest API with a currency & Crypto Currency

  async queryAPI(currency, cryptocurrency) {
    // Query the URL
    const url = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`
    );

    // Return as JSON
    const result = await url.json();

    //Return the object
    return {
      result
    };
  }

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
