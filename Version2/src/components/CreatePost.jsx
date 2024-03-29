import { useContext, useEffect, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 5,
        title: postTitle,
        body: postBody,
        tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter a Title for your post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
          rows={4}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <textarea
          ref={tagsElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Please enter a space between your hashtags..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
