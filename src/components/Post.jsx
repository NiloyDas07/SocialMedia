import { FcLike } from "react-icons/fc";

export default function Post({ post }) {
  return (
    <center>
      <div className="card" style={{ width: "18rem" }}>
        {post.img && <img src={post.img} className="card-img-top" alt="..." />}

        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.likes}
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          <p>Likes: {post.likes}</p>
          <a href="#" className="btn">
            <FcLike />
          </a>
          <p>
            {post.tags.map((tag) => (
              <span class="badge text-bg-light">#{tag}</span>
            ))}
          </p>
        </div>
      </div>
    </center>
  );
}
