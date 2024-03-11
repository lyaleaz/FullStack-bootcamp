import React, { useEffect, useState } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [stateMobile, setState] = useState(false);
  const [showPosts, setShowPosts] = useState(window.innerWidth < 600);

  useEffect(() => {
    const getData = async function () {
      let postsData = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
      setPosts(postsData.splice(0, 10));
    };
    getData();
  }, []);

  useEffect(() => {
    const numPostsToShow = setShowPosts(window.innerWidth < 600);
    window.addEventListener("resize", numPostsToShow);
    return () => {
      window.removeEventListener("resize", numPostsToShow);
    };
  }, []);

  return (
    <div>
      <h1>TOP Posts</h1>
      <div style={{ display: "flex", flexWrap: showPosts ? "wrap" : "nowrap" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
