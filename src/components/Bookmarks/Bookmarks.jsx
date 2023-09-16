import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
  return <div className="md:w-1/3 text-3xl">
    Total Bookmarks: {bookmarks.length}
    {

        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)

    }
    </div>;
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;