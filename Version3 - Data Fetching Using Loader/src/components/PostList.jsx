import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingPosts from "./LoadingPosts";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <LoadingPosts></LoadingPosts>} */}
      {/* {!fetching && postList.length === 0 && <Welcome />} */}
      <div className="post-list">
        {postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
