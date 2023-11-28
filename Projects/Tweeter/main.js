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
  tweet.addComment(cm, postId);
  // const ps = tweet.getPosts();
  renderPost(tweet.getPosts());
});

const help = tweet.getPosts();
console.log(help);
