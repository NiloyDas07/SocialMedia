import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";
import LoadingPosts from "./LoadingPosts";

export default function PostList() {
  const { postList, fetching } = useContext(PostListData);

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
