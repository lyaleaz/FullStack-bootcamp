const validator = require("validator");

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const email1 = "lyale000az@gmail.com";
console.log(`Is "${email1}" a valid email? ${validator.isEmail(email1)}`);

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const phoneNumber = "1112233";
console.log(
  `Is "${phoneNumber}" a valid US mobile phone number? ${validator.isMobilePhone(
    phoneNumber,
    "en-US"
  )}`
);

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
let cleanedText = validator.blacklist(text, blacklist).toLowerCase();
console.log(`Cleaned Text: ${cleanedText}`);
