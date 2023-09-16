import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookmarks }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between mt-8">
        <div className="flex gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h5 className="text-xl font-semibold">{author}</h5>
            <h6>{posted_date}</h6>
          </div>
        </div>

        <div>
          <span className="tex-xl">{reading_time} min to read</span>
          <button onClick={() => handleBookmarks(blog)} className="text-lg ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl mt-4 mb-4">{title}</h2>

      <h5>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-4">
            <a href="">#{hash}</a>
          </span>
        ))}
      </h5>
    </div>
  );
};


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func
};

export default Blog;
