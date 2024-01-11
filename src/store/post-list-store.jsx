import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: 1,
    img: "https://getwallpapers.com/wallpaper/full/b/4/e/1040296-nice-wallpapers-images-1920x1200-ipad-retina.jpg",
    title: "First Post",
    body: "Hi! This is my first post.",
    likes: 0,
    userID: "ABC",
    tags: ["fisrtpost", "Hi"],
  },
  {
    id: 2,
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
  addLike: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList]; // Re rendering twice because of strictmode.

  if (action.type === "DELETE_POST") {
    console.log("deleted");
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    const id = currPostList[currPostList.length - 1].id + 1;
    const newPost = action.payload;
    newPost.id = id;
    newPost.likes = 0;
    newPostList = [newPost, ...currPostList];
  } else if (action.type === "ADD_LIKE") {
    for (let i = 0; i < newPostList.length; i++) {
      if (action.payload.postID === newPostList[i].id) {
        newPostList[i].likes = newPostList[i].likes + 1;
      }
    }
  }

  return newPostList;
};

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        title: postTitle,
        body: postBody,
        tags,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  const addLike = (postID) => {
    dispatchPostList({
      type: "ADD_LIKE",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addLike }}>
      {children}
    </PostList.Provider>
  );
}
