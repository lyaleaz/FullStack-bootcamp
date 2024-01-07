const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521";
class ApiManager {
  constructor(stocksAPI, renderer) {
    this.stocksAPI = stocksAPI;
    this.renderer = renderer;
  }

  async fetchStockData(ticker) {
    let stockData = await $.get(`${this.stocksAPI}/${ticker}`);
    this.renderer.render(stockData);
  }
}
const fetchDatum = async function (surname) {
  let data = await Person.find({ lastName: surname });
  console.log(data);
};
