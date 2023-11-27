const _posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      {
        id: "c4",
        text: "Don't worry second poster, you'll be first one day.",
      },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
      { id: "c7", text: "Haha second place what a joke." },
    ],
  },
];
const Render = function () {
  const renderPost = function (_posts) {
    $("#posts").innerHTMLt = "";
    for (let i of _posts) {
      console.log(i.text);
      let divPost = $("<div class=post id=" + i.id + " > " + i.text + "</div>");
      $("#posts").append(divPost);

      for (let j of i.comments) {
        const deletX = "<span class= delete-comment >x</span>";
        let divComment = $(
          "<div class=' posts  comments' id=" +
            i.id +
            ">" +
            deletX +
            " " +
            j.text +
            "<" +
            j.id +
            "</div>"
        );
        //  let divCopy = $("<div class='comments'>").text(j.text).addClass(j.id);
        $("#" + i.id).append(divComment);
      }
      const newtext = "<input classs = text type=text placeholder= comment? >";
      //    newtext.addClass("text")
      const newbtn = "<button>comment</button>";
      $("#" + i.id).append(newtext);
      $("#" + i.id).append(newbtn);
      const delBtn = "<br><br><button class = delete> delete comment</button>";
      $("#" + i.id).append(delBtn);
    }
  };
  return { renderPost: renderPost };
};
const render = Render();
console.log(render.renderPost(_posts));
