import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import  PropTypes from "prop-types";

const Blogs = ({ handleBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h2>Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};


Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.number
};
export default Blogs;