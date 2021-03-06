import { Link } from "react-router-dom";

const BlogList = function ({ blogsProp, titleProp }) {
  //   const blogs = props.blogsProp; - before destructurizing
  //   const title = props.titleProp; - before destructurizing

  return (
    <div className="blog-list">
      <h2>{titleProp}</h2>
      {blogsProp.map(function (blog) {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
