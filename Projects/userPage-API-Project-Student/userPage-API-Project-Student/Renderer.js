class Renderer {
  constructor() {}

  usersTemplate(user, includeImage = true) {
    const userClass = $("#template-user-container").html();
    const userTemplate = Handlebars.compile(userClass);

    if (includeImage) {
      return userTemplate(user);
    } else {
      return userTemplate({
        image: user.image,
        firstname: user.name.first,
        lastname: user.name.last,
        city: user.location.city,
        state: user.location.state,
      });
    }
  }

  FriendsTemplate(friend) {
    const FriendClass = $("#template-friend-container").html();
    const friendTemplate = Handlebars.compile(FriendClass);

    return friendTemplate({
      firstname: friend.name.first,
      lastname: friend.name.last,
    });
  }

  quoteTemplate(quote) {
    const quoteClass = $("#template-FavQuote-container").html();
    const quoteTemplate = Handlebars.compile(quoteClass);

    return quoteTemplate({
      quotes: quote,
    });
  }
  pokeTemplate(pock) {
    const pockClass = $("#template-Poke-container").html();
    const pockTemplate = Handlebars.compile(pockClass);

    return pockTemplate({ pokemon: pock });
  }

  AboutTemplate(AboutMe) {
    const AboutClass = $("#template-about-container").html();
    const aboutTemplate = Handlebars.compile(AboutClass);
    console.log(AboutMe);
    return aboutTemplate({ about: AboutMe });
  }
  renderUserData() {
    const userContainer = $(".user-container");
    const friendsContainer = $(".friends-container");
    const quoteContainer = $(".quote-container");
    const pokeContainer = $(".pokemon-container");
    const AboutContainer = $(".meat-container");

    const userHtml = this.usersTemplate(this.data.mainUser);
    userContainer.html(userHtml);

    const friendsHtml = this.data.friends
      .map((user) => this.FriendsTemplate(user))
      .join("");
    friendsContainer.html(friendsHtml);

    const quoteHtml = this.quoteTemplate(this.data.quote);
    quoteContainer.html(quoteHtml);

    const pokeHtml = this.pokeTemplate(this.data.poke);
    pokeContainer.html(pokeHtml);

    const AboutHtml = this.AboutTemplate(this.data.aboutMeText);
    AboutContainer.html(AboutHtml);
  }
}
