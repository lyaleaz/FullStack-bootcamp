const commentsContainer =
  '<div class="comments-container">' +
  "<div class=comments-list></div>" +
  '<input type="text" class="comment-name">' +
  '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

$(".posts").append(
  '<div class="post">' +
    '<a href="#" class="remove">remove</a> ' +
    '<a href="#" class="show-comments">comments</a> ' +
    post.text +
    commentsContainer +
    "</div>"
);
