import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";

export default function PostList() {
  const { postList } = useContext(PostListData);
  console.log(postList);

  return (
    <div className="post-list">
      {postList.map((post) => <Post key={post.id} post={post}/>)}
    </div>
  );
}
