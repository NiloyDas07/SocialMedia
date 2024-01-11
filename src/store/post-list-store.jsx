import { createContext, useReducer } from "react";

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
    console.log("deleted");
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    const id = currPostList[currPostList.length - 1].id + 1;
    const newPost = action.payload;
    newPost.id = id;
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

  const connect = (posts) => {
    dispatchPostList({
      type: "FETCH_POST_LIST",
      payload: { posts },
    });
  };

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

  const handleConnectClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        connect(data.posts);
      });
  };

  return (
    <PostList.Provider
      value={{ handleConnectClick, postList, addPost, deletePost, addLike }}
    >
      {children}
    </PostList.Provider>
  );
}
