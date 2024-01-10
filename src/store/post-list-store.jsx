import { createContext } from "react";

const PostList = createContext({});

export default function PostListProvider({ children }) {
  return <PostListProvider value={[]}>{children}</PostListProvider>;
}
