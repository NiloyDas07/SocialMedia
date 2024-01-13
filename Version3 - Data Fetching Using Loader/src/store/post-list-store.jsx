import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  connect: () => {},
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addLike: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList]; // Re rendering twice because of strictmode.

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    const newPost = action.payload;
    newPost.reactions = 0;
    newPostList = [newPost, ...currPostList];
  } else if (action.type === "ADD_LIKE") {
    for (let i = 0; i < newPostList.length; i++) {
      if (action.payload.postID === newPostList[i].id) {
        newPostList[i].reactions = newPostList[i].reactions + 1;
      }
    }
  } else if ((action.type = "FETCH_POST_LIST")) {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const connect = (posts) => {
    dispatchPostList({
      type: "FETCH_POST_LIST",
      payload: { posts },
    });
  };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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
    <PostList.Provider
      value={{ fetching, postList, addPost, deletePost, addLike }}
    >
      {children}
    </PostList.Provider>
  );
}
