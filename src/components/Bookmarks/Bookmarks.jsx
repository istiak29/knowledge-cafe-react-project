import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-3xl bg-slate-200 ml-5 text-center py-5">
      <div className="rounded-lg bg-white py-5 m-3 text-lg">
        <h4>Total Reading Time: {readingTime} min</h4>
      </div>
      Total Bookmarks: {bookmarks.length}
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};


Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};
export default Bookmarks;