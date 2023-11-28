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

const renderPost = function (_posts) {
  $("#posts").empty();
  // $("#posts").addClass("posts");
  $("#posts").innerHTML = "";
  for (let i of _posts) {
    console.log(i.text);
    let divPost = $(
      "<div><div class='post' id=" + i.id + ">" + i.text + "</div></div>"
    );
    $("#posts").append(divPost);
    let divs = "<div></div>";
    $("#posts").val("");
    for (let j of i.comments) {
      const deletX =
        "<span class='delete-comment' data-comment-id='" + j.id + "'>x</span>";
      let divComment = $(
        "<div class='comments' id=" +
          j.id +
          ">" +
          deletX +
          " " +
          j.text +
          "</div>"
      );

      $("#" + i.id).append(divComment);
    }

    const newtext =
      "<input id=input" + i.id + " placeholder = 'comment?' class='text'>";
    const newbtn =
      "<button class='commentBtn' id=btn" + i.id + ">comment</button>";
    //const commentsDiv = $("<div class='comments-container'></div>");
    // console.log(commentsDiv);
    $("#" + i.id).append(divs);

    $("#" + i.id).append(newtext);
    $("#" + i.id).append(newbtn);

    const delBtn =
      "<br><br><button class='delete' id = del" +
      i.id +
      "data-btn=delete> Delete Post</button>";
    $("#" + i.id).append(delBtn);
  }

  return {
    renderPost: renderPost,
  };
};

/*
const renderPost = function (_posts) {
  $("#posts").empty();
  $("#posts").addClass("posts");
  for (let i of _posts) {
    console.log(i.text);
    let divPost = $(
      "<div><div class=post id=" + i.id + " > " + i.text + "</div></div>"
    );
    $("#posts").append(divPost);
    let divs = "<div></div>";
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
    $("#" + i.id).append(divs);
    $("#" + i.id).append(newtext);
    $("#" + i.id).append(newbtn);
    const delBtn = "<br><br><button class = delete> delete comment</button>";
    $("#" + i.id).append(delBtn);
  }

  // ...

  return { renderPost: renderPost };
};*/
console.log(renderPost(_posts));
