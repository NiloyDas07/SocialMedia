import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/post-list-store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <center>
      <div className="card" style={{ width: "18rem" }}>
        {post.img && <img src={post.img} className="card-img-top" alt="..." />}

        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.likes}
            </span>
            <span
              className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-light"
              style={{ color: "rgb(49, 48, 48)" }}
              onClick={() => deletePost(post.id)}
            >
              X
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <a
            href="#"
            className="btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ margin: "0" }}>Like </p> <FcLike />
          </a>
          <p>
            {post.tags.map((tag) => (
              <span key={tag} className="badge text-bg-light">
                #{tag}
              </span>
            ))}
          </p>
        </div>
      </div>
    </center>
  );
}
