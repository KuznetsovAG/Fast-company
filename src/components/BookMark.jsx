import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, onToggleBookMark, id }) => {
    return (
        <button onClick={() => onToggleBookMark(id)}>
            <i className={`bi bi-bookmark${status ? "-check-fill" : ""}`} />
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};
export default BookMark;
