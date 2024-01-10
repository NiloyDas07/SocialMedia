import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    img: "https://getwallpapers.com/wallpaper/full/b/4/e/1040296-nice-wallpapers-images-1920x1200-ipad-retina.jpg",
    title: "First Post",
    body: "Hi! This is my first post.",
    likes: 0,
    userID: "ABC",
    tags: ["fisrtpost", "Hi"],
  },
  {
    id: "2",
    title: "Second Post",
    body: "Hi! This is my second post.",
    likes: 500,
    userID: "ABC",
    tags: ["secondpost", "Hi"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {};

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
}
