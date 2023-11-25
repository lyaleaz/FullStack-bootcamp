const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toSkewerCase = function (str) {
    return str.replace(/\s+/g, "-");
  };

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const Bank = function () {
  let money = 500;

  const depositCash = function (cash) {
    money += cash;
  };

  const checkBalance = function () {
    console.log(money);
  };

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const SongsManager = function () {
  const songs = {};

  const addSong = function (name, url) {
    const videoId = url.split("v=")[1];

    songs[name] = videoId;
  };

  const getSong = function (name) {
    const videoId = songs[name];

    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    } else {
      console.log(`Song "${name}" not found.`);
    }
  };

  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // Outputs: https://www.youtube.com/watch?v=3JZ4pnNtyxQ
console.log(songsManager.getSong("how long")); // Outputs: https://www.youtube.com/watch?v=CwfoyVa980U
console.log(songsManager.getSong("nonexistent")); // Outputs: Song "nonexistent" not found.

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); // Outputs: 950

// Example usage:
const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); // Outputs: Dorothy
console.log(formatter.toSkewerCase("blue box")); // Outputs: blue-box
