class APIManager {
  constructor() {
    this.data = {};
  }

  promiseForUsers() {
    let userNum = 7;
    return $.get(`https://randomuser.me/api/?results=${userNum}`)
      .done((data) => {
        const users = data.results;
        this.data.mainUser = users[0];
        this.data.friends = users.slice(1);
      })
      .fail((xhr, status, error) => {
        console.error("Error fetching data:", error);
      });
  }
  promiseQuote() {
    return $.get(`https://api.kanye.rest`)
      .done((data) => {
        const quote = data.quote;
        this.data.quote = quote;
      })
      .fail((xhr, status, error) => {
        console.error("Error fetching data:", error);
      });
  }
  getRandomPock() {
    return Math.floor(Math.random() * 898) + 1;
  }
  promisePoke() {
    return $.get(`https://pokeapi.co/api/v2/item/${this.getRandomPock()}/`)
      .done((data) => {
        this.data.poke = data;
        spriteUrl: data.sprites.front_default;
      })
      .fail((xhr, status, error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  }
  promiseAboutMe() {
    return $.get(`https://baconipsum.com/api/?type=meat-and-filler`)
      .done((data) => {
        const aboutMeText = data[0];
        this.data.aboutMeText = aboutMeText;
      })
      .fail((xhr, status, error) => {
        console.error("Error fetching about data:", error);
      });
  }
}
