class Render {
  constructor() {
    this.source = $("#city-template");
    this.template = Handlebars.compile(this.source.html());
  }

  display(data) {
    let HTML = this.template({ data: data });
    $("#cities-container").append(HTML);
  }
}
