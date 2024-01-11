import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingPosts from "./LoadingPosts";

export default function PostList() {
  const { postList, connect } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        connect(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingPosts></LoadingPosts>}
      {!fetching && postList.length === 0 && <Welcome />}
      <div className="post-list">
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}
