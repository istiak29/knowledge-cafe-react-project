import PropTypes from 'prop-types';

Bookmark.propTypes = {
    
};

function Bookmark({bookmark}) {
    const {title} = bookmark;
    return (
      <div className='shadow-lg rounded-lg p-5 bg-slate-200 m-5'>
        <h3 className="text-2xl">{title}</h3>
      </div>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;