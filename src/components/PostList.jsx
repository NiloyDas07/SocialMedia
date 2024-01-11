import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import Welcome from "./Welcome";

export default function PostList() {
  const { postList, handleConnectClick } = useContext(PostListData);

  return (
    <>
      {postList.length === 0 && <Welcome handleConnectClick={handleConnectClick} />}
      <div className="post-list">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
