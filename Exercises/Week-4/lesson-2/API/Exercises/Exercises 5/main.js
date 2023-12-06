const apiKey = "eOIhJxcqk26AxygXTnh0arBpqkfw5PAR";
function SearchGif() {
  fetch(`https://api.giphy.com/v1/gifs/search?q=cats&api_key=${apiKey}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const embedUrl = data.data.length > 0 ? data.data[0].embed_url : "";

      document.getElementById(
        "giphyGif"
      ).innerHTML = `<iframe src="${embedUrl}" width="480" height="270" frameborder="0" class="giphy-embed" allowfullscreen></iframe>`;
    });
}

SearchGif();
