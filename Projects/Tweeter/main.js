const tweet = PostTweet();
const res = tweet.getPosts();

render = renderPost(res);

const post = function () {
  const temp = $("#input").val();
  tweet.addPost(temp);
  const po = tweet.getPosts();
  renderPost(po);
};
$("#posts").on("click", ".commentBtn", function () {
  const postId = $(this).attr("id").slice(3);
  const cm = $("#input" + postId).val();
  tweet.addComment(postId, cm);
  // const ps = tweet.getPosts();
  renderPost(tweet.getPosts());
});

$("#posts").on("click", ".delete", function () {
  const postID = $(this).closest(".post").attr("id");
  tweet.removePost(postID);
  renderPost(tweet.getPosts());
});
$("#posts").on("click", ".delete-comment", function () {
  const commentID = $(this).data("comment-id");
  const postID = $(this).closest(".post").attr("id");
  tweet.removeComment(postID, commentID);
  renderPost(tweet.getPosts());
});

const help = tweet.getPosts();
console.log(help);
