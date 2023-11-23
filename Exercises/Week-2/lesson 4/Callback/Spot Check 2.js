let users = [];

const getData = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            users = [{ name: "Rick" }, { name: "Morty" }];
            console.log("Got users");
            resolve();
        }, 3000);
    });
};

const displayData = function () {
    console.log("Going to display: " + users);
    for (user of users) {
        console.log(user.name);
    }
};

getData().then(function () {
    displayData();
});
