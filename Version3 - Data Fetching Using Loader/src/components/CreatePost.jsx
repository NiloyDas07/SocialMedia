import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

export default function CreatePost() {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const tags = tagsElement.current.value.split(" ");
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // tagsElement.current.value = "";
  // fetch("https://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     userId: 5,
  //     title: postTitle,
  //     body: postBody,
  //     tags,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((post) => {
  //     addPost(post);
  //     navigate("/");
  //   });
  // };

  return (
    <Form
      method="POST"
      className="create-post-form"
      //  onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          name="title"
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
          name="body"
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
          name="tags"
          type="text"
          className="form-control"
          id="title"
          placeholder="Please enter a space between your hashtags..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.userId = 5;

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
};
